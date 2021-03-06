import { ODataCrudOperation } from './BaseODataCruder';
import { ErrorMessage } from '../../ErrorHandling/ErrorMessage';

export class CrudParams {
  private static readonly ENTITYSETNAMEKEY: string = 'entitySet';
  private static readonly QUERYOPTIONSKEY: string = 'queryOptions';
  private static readonly READLINKKEY: string = 'readLink';
  private static readonly MALFORMEDPARAM: string = 'Malformed parameter:';
  private static readonly SERVICEURLKEY: string = 'serviceUrl';

  private serviceUrl: string;
  private entitySetName: string;
  private queryString: string;
  private readLink: string;

  public constructor(params: any, operation: ODataCrudOperation) {
    this.setServiceUrl(params);
    this.setEntitySetName(params);
    this.setQueryString(params);
    this.setReadLink(params);

    if (this.serviceUrl == null) {
      throw new Error(ErrorMessage.format(ErrorMessage.ODATA_MALFORMED_PARAMS, CrudParams.MALFORMEDPARAM, 
        CrudParams.SERVICEURLKEY));
    }

    if (this.entitySetName == null) {
      throw new Error(ErrorMessage.format(ErrorMessage.ODATA_MALFORMED_PARAMS, CrudParams.MALFORMEDPARAM, 
        CrudParams.ENTITYSETNAMEKEY));
    }

    // if operation is create no need to check other settings
    if (operation === ODataCrudOperation.Create) {
      return;
    }

    if (this.readLink == null && this.queryString == null) {
      throw new Error(ErrorMessage.format(ErrorMessage.ODATA_READLINK_MISSING, operation.toString()));
    }
  }

  public getServiceUrl(): string {
    return this.serviceUrl;
  }

  public getEntitySetName(): string {
    return this.entitySetName;
  }

  public getQueryString(): string {
    return this.queryString;
  }

  public getReadLink(): string {
    return this.readLink;
  }

  private setServiceUrl(params: any): void {
    let value = params[CrudParams.SERVICEURLKEY];
    if (typeof value === 'string' && value !== '' && this.serviceUrl == null) {
      this.serviceUrl = value;
    }
  }

  private setEntitySetName(params: any): void {
    let value = params[CrudParams.ENTITYSETNAMEKEY];
    if (typeof value === 'string' && value !== '') {
      this.entitySetName = value;
    }
  }

  private setQueryString(params: any): void {
    let value = params[CrudParams.QUERYOPTIONSKEY];
    if (typeof value === 'string' && value !== '') {
      this.queryString = value;
    }
  }

  private setReadLink(params: any): void {
    let value = params[CrudParams.READLINKKEY];
    if (typeof value === 'string' && value !== '') {
      this.readLink = value;
    }
  }
}
