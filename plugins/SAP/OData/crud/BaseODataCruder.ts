import { CrudParamsHelper } from './CrudParamsHelper';
import { ChangeSetManager } from './ChangeSetManager';
import { ODataHelper } from '../ODataHelper';
import { ErrorMessage } from '../../ErrorHandling/ErrorMessage';

export enum ODataCrudOperation {
  Create,
  Update,
  Delete,
  Read,
};

export class BaseODataCruder {
  protected service: string[];
  protected params: string[];
  protected headers: any;
  protected serviceUrl: string;
  protected changeSetManager: ChangeSetManager;

  public constructor(params: any) {
    this.params = params;

    this.setService();
    this.setServiceUrl();
    this.setHeaders();
  }

  public getServiceUrl(): string {
    return this.serviceUrl;
  }

  public setChangeSetManager(changeSetManager: any): void {
    if (changeSetManager == null) {
      throw new Error(ErrorMessage.ODATA_CRUD_INIT_CHANGESETMANAGER_NOT_FOUND);
    }
    this.changeSetManager = changeSetManager;
  }

  public getDataContext(dataService: any): any {
    if (dataService != null) {
      return ODataHelper.createDataContext(dataService.getMetadata());
    }

    throw new Error(ErrorMessage.ODATA_UNKNOWN_DATASERVICE_TYPE);
  }

  private setService(): void {
    this.service = CrudParamsHelper.getServiceFromParams(this.params);
  }

  private setServiceUrl(): void {
    this.serviceUrl = CrudParamsHelper.getServiceUrlFromService(this.service);
  }

  private setHeaders(): void {
    this.headers = this.getHttpHeaders(CrudParamsHelper.getHeadersFromParams(this.params));
  }

  private getHttpHeaders(headers: any): any {
    let httpHeader = ODataHelper.createHttpHeaders();
    if (headers == null) {
      return httpHeader;
    }

    for (let key in headers) {
      if (key) {
        httpHeader.set(key, headers[key]);
      }
    }
    return httpHeader;
  }
}
