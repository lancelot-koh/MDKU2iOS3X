//
//  CpmsSession.h
//  SAPMDCFramework
//
//  Created by Wonderley, Lucas on 3/22/17.
//  Copyright © 2017 SAP. All rights reserved.
//

#ifndef CpmsSessionBridge_h
#define CpmsSessionBridge_h

#import <Foundation/Foundation.h>
#import "BridgeCommon.h"

@interface CpmsSessionBridge: NSObject

-(void) initialize: (NSDictionary*) params;

-(void) updateConnectionParams: (NSDictionary*) params;

-(void) sendRequest: (NSDictionary *) params
            resolve: (SnowblindPromiseResolveBlock) resolve
             reject: (SnowblindPromiseRejectBlock) reject;

@end

#endif /* CpmsSessionBridge_h */

