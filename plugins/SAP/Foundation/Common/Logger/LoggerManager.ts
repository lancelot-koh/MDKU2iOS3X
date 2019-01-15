export class LoggerManager {

  public static init(logFileName = undefined, maxSizeOfRolloverInMegaBytes = undefined) {
    //
  }

  public static getInstance(): any {
    return '';
  }

  public static clearLog() {
    //
  }

  private constructor() {
    //
  }

  public toggle(): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  }

  public on(): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  }

  public off(): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  }

  public isTurnedOn(): boolean {
    return false;
  }

  public isLogSeverityHigher(severity): boolean {
    return false;
  }

  public getLevel(): string {
    return '';
  }

  public setLevel(logLevel): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  }

  public log(message, severity = undefined): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  }

  public uploadLogFile(backendURL: string, applicationID: string): Promise<any> {
    return new Promise((resolve, reject) => resolve(''));
  }

}
