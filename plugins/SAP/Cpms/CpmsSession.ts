export class CpmsSession {
  public static getInstance(): CpmsSession {
    return null;
  }
  
  public initialize(params): void {
    // intentional no-op
  }

  public updateConnectionParams(params): void {
      // intentional no-op
  }

  public sendRequest(params): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  }
};
