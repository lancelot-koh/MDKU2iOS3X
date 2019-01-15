/**
 * This is the common interface exosed to TS for the SecureStore native implementation.
 */
export class SecureStoreManager {

  public static getInstance(): SecureStoreManager {
    //
    return null;
  }

  public putOfflinestoreEncryptionKey(value: String) {
    //
  }

  public getOfflinestoreEncryptionKey(): String {
    return '';
  }

};
