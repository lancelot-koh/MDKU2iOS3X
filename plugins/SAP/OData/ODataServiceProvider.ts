export class ODataServiceProvider {
  public static getServiceTimeZoneAbbreviation() {
    return '';
  }

  public static clear(context, name) {
    return new Promise((resolve, reject) => resolve(''));
  }

  /// Offline specific methods
  public download(params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public initOfflineStore(context, params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public upload(params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public close(params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public clear(params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  /// Online specific methods
  public create(params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public open(params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  /// Common CRUD methods
  public read(entitySet, properties, queryString): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public createEntity(odataCreator): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public updateEntity(odataUpdater): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public deleteEntity(odataDeleter): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public deleteMediaEntity(entitySetName, queryString, readLink): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public createMediaEntity(entitySetName, properties, headers, isOnlineRequest, media): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public createOpenService(serviceUrl): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public downloadMedia(entitySet, queryString, readLink): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public isMediaLocal(entitySet, readLink): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  // Change Set methods
  public beginChangeSet(): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public cancelChangeSet(): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public commitChangeSet(): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public count(entitySet, properties, queryString): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };
  
  public callFunction(functionName, functionParameters): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  };

  public getPropertyType(params): string {
    return '';
  };
}
