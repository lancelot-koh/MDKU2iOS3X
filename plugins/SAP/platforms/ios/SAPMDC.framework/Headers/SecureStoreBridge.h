//  SecureStoreBridge.h
//  SAPMDCFramework
//
//  Created by Nunez Trejo, Manuel on 3/2/17.
//  Copyright © 2017 SAP. All rights reserved.
//

#ifndef SecureStoreBridge_h
#define SecureStoreBridge_h

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


@interface SecureStoreBridge: NSObject

-(void) putOfflineStoreEncryptionKey: (NSString *)value  throwsError:(NSError**)error;
-(NSString*) getOfflineStoreEncryptionKeyThrowsError: (NSError**)error;

@end

#endif /* SecureStoreBridge_h */
