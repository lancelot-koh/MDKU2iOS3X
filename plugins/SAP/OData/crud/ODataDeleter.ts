import { BaseODataCruder } from './BaseODataCruder';
import { ReadService } from './ReadService';
import { ReadParamsFactory } from './ReadParamsFactory';
import { ODataHelper } from '../ODataHelper';
import { ChangeSetManager } from './ChangeSetManager';

export class ODataDeleter extends BaseODataCruder {
  private targetReadParams: any;

  public constructor(params: any) {
    super(params);
    this.setTargetReadParams();
  }

  public execute(dataService: any, changeSetManager: ChangeSetManager): string {
    this.setChangeSetManager(changeSetManager);
    let entityToDelete = ReadService.entityFromParams(this.targetReadParams, dataService, this.changeSetManager);
    this.changeSetManager.deleteEntity(entityToDelete, this.headers);
    return ODataHelper.entityValueToJson(entityToDelete, this.getDataContext(dataService));
  }
  
  private setTargetReadParams(): void {
    this.targetReadParams = ReadParamsFactory.createReadParams(this.service);
  }
}
