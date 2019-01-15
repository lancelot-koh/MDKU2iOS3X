export class PushNotification {
  
  public static getInstance(): PushNotification {
    return PushNotification._instance;
  }

  private static _instance: PushNotification = new PushNotification();

  private constructor() {
    if (PushNotification._instance) {
      throw new Error('Error: Instantiation failed. Use getInstance() instead of new.');
    }
    PushNotification._instance = this;
  }

  public registerForPushNotification(applicationId: string, baseUrlString: string, deviceId: string): Promise<any> {
    return new Promise((resolve) => resolve('Dummy resolve'));    
  }

  public didRegisterForRemoteNotifications(deviceToken: any) {
    //
  }

  public didFailToRegisterNotifications(error: any) {
    //
  }

  public unregisterForPushNotification(applicationId: string, baseUrlString: string, deviceId: string): Promise<any> {
    return new Promise((resolve) => resolve('Dummy resolve'));        
  }    
};
