import { BaseODataCruder } from './BaseODataCruder';
import { CrudParamsHelper } from './CrudParamsHelper';
import { ODataLinkCreator } from './odatalinking/odatalinkers/ODataLinkCreator';
import { ChangeSetManager } from './ChangeSetManager';
import { ODataHelper } from '../ODataHelper';
import { ErrorMessage } from '../../ErrorHandling/ErrorMessage';

export class ODataCreator extends BaseODataCruder {
  private properties: string[];
  private entitySetName: string;
  private linkCreators: [ODataLinkCreator];

  public constructor(params: any) {
    super(params);
    this.setEntitySetName();
    this.setProperties();
    this.setLinkCreators();
  }

  public execute(dataService: any, changeSetManager: ChangeSetManager): string {
    this.setChangeSetManager(changeSetManager);
    let entityToCreate = this.initNewEntity(dataService);

    ODataHelper.setEntityValueProperties(entityToCreate, this.properties);

    // MandatoryParentLinker will be returned by a link which does not have its principal's referential constraints 
    // set, but is in a strict relationship this one needs to be used with createRelatedEntity
    let linkToParentEntity = this.executeLinkCreators(dataService, entityToCreate);
    if (linkToParentEntity != null) {
      this.createUsingCreateRelatedEntity(entityToCreate, linkToParentEntity);
    } else {
      changeSetManager.createEntity(entityToCreate, this.headers);
    }
    return ODataHelper.entityValueToJson(entityToCreate, this.getDataContext(dataService));
  }

  private setEntitySetName(): void {
    this.entitySetName = CrudParamsHelper.getEntitySetNameFromService(this.service);
  }

  private setProperties(): void {
    let properties = CrudParamsHelper.getPropertiesFromService(this.service);

    if (properties != null) {
      this.properties = properties;
    } else {
      throw new Error(ErrorMessage.format(ErrorMessage.ODATA_CREATE_OPERATION_EMPTY_PROPERTY_NOT_ALLOWED,
        CrudParamsHelper.MALFORMEDPARAM));
    }
  }

  private setLinkCreators(): void {
    this.linkCreators = CrudParamsHelper.getLinkCreatorsFromParams(this.params);
  }

  private createUsingCreateRelatedEntity(entityToCreate: any, linkToParentEntity: any): void {
    let relatedParent = linkToParentEntity.getPrincipalEntity();
    let navigationPropertyFromRelatedParent = ODataHelper.partnerPropertyFromEntity(
      linkToParentEntity.getDependantNavigationProperty(), relatedParent);

    this.changeSetManager.createRelatedEntity(entityToCreate, relatedParent,
      navigationPropertyFromRelatedParent, this.headers);
  }

  private initNewEntity(dataService: any): any {
    if (dataService != null) {
      let entitySet = dataService.getEntitySet(this.entitySetName);
      return ODataHelper.createEntityValue(entitySet.getEntityType());
    }
    throw new Error(ErrorMessage.format(ErrorMessage.ODATA_CREATE_ENTITY_ENTITY_SET_NOT_FOUND, this.entitySetName));
  }

  private executeLinkCreators(dataService: any, sourceEntity: any): any {
    let linkToParentEntity = null;

    if (this.linkCreators != null) {
      for (let linkCreator of this.linkCreators) {
        // Can only use createRelatedEntity to create the parent once.
        let canUseCreateRelatedEntity = (linkToParentEntity == null);
        let link = linkCreator.execute(sourceEntity, dataService, this.changeSetManager, canUseCreateRelatedEntity);
        if (link != null) {
          // Make sure that no more than one linker returns a link which requires to be a relatedParent
          if (linkToParentEntity != null) {
            throw new Error('Two links forced the usage of createRelatedEntity, which is not possible');
          } else {
            linkToParentEntity = link;
          }
        }
      }
    }
    return linkToParentEntity;
  }
}
