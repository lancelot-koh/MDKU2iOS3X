import { ErrorMessage } from '../../ErrorHandling/ErrorMessage';
import { ODataHelper } from '../ODataHelper';

export class ChangeSetManager {
  public static UNPROCESSEDPREFIX: string = 'pending_';  

  public static isPending(entity: any): boolean {
    let readLink = entity.getReadLink();
    return readLink == null || readLink.startsWith(ChangeSetManager.UNPROCESSEDPREFIX);
  }

  private pendingChangeSet: any;
  private pendingEntityReadLinkOrdinalSuffix: number;
  private service: any;

  constructor(dataService: any) {
    this.service = dataService;
    this.pendingEntityReadLinkOrdinalSuffix = 0;
    this.pendingChangeSet = null;
  }

  public beginChangeSet(): void {
    if (this.pendingChangeSet != null)  {
      throw new Error(ErrorMessage.ODATA_CHANGESET_ALREADY_EXISTS);
    }
    this.pendingChangeSet = ODataHelper.createChangeSet();
    this.pendingEntityReadLinkOrdinalSuffix = 0;
  }

  public cancelChangeSet(): void {
    this.pendingChangeSet = null;
    this.pendingEntityReadLinkOrdinalSuffix = 0;
  }

  public commitChangeSet(): void {
    let changeSet = this.pendingChangeSet;
    if (changeSet == null) {
      throw new Error(ErrorMessage.ODATA_COMMIT_EMPTY_CHANGESET_NOT_ALLOWED);
    }

    this.pendingChangeSet = null;
    this.pendingEntityReadLinkOrdinalSuffix = 0;
    this.processBatchWithChangeSet(changeSet);
  }

  public createEntity(entity: any, headers: any): void {
    let changeSet = this.pendingChangeSet;
    if (changeSet != null) {
      this.pendingEntityReadLinkOrdinalSuffix += 1;
      entity.setReadLink(ChangeSetManager.UNPROCESSEDPREFIX + this.pendingEntityReadLinkOrdinalSuffix);
      changeSet.createEntity(entity, headers);
    } else {
      this.service.createEntity(entity, headers);
    }
  }

  public createRelatedEntity(entity: any, parentEntity: any, parentNavProp: any, headers: any): void {
    let changeSet = this.pendingChangeSet;
    if (changeSet != null) {
      this.pendingEntityReadLinkOrdinalSuffix += 1;
      entity.setReadLink(ChangeSetManager.UNPROCESSEDPREFIX + this.pendingEntityReadLinkOrdinalSuffix);
      changeSet.createRelatedEntity(entity, parentEntity, parentNavProp, headers);
    } else {
      this.service.createRelatedEntity(entity, parentEntity, parentNavProp, headers);
    }
  }

  public updateEntity(entity: any, headers: any): void {
    let changeSet = this.pendingChangeSet;
    if (changeSet != null) {
      changeSet.updateEntity(entity, headers);
    } else {
      this.service.updateEntity(entity, headers);
    }
  }

  public deleteEntity(entity: any, headers: any): void {
    let changeSet = this.pendingChangeSet;
    if (changeSet != null) {
      changeSet.deleteEntity(entity, headers);
    } else {
      this.service.deleteEntity(entity, headers);
    }
  }

  public pendingEntityFromPendingChangeSet(readLink: string): any {
    if (!readLink.startsWith(ChangeSetManager.UNPROCESSEDPREFIX)) {
      return null;
    }
    return ODataHelper.entityWithReadLink(this.pendingChangeSet, readLink);
  }

  private processBatchWithChangeSet(changeSet: any): void {
    let requestBatch = ODataHelper.createRequestBatch();
    requestBatch.addChanges(changeSet);

    this.service.processBatch(requestBatch);
    let error = changeSet.getError();
    if (error != null) {
      throw error;
    }
  }
}
