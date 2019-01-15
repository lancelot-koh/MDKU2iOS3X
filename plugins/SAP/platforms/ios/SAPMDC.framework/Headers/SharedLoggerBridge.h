//
//  SharedLoggerBridge.h
//  SAPMDCFramework
//
//  Copyright © 2017. SAP. All rights reserved.
//

#ifndef SharedLoggerBridge_h
#define SharedLoggerBridge_h

#import <Foundation/Foundation.h>
#import "BridgeCommon.h"

@interface SharedLoggerBridge : NSObject

/* Logs a message */
-(void) seamClientLogMessage: (NSString*)message withSeverity:(NSString *)severity;
-(void) pluginLogMessage: (NSString*)message withSeverity:(NSString *)severity;

@end

#endif /* SharedLoggerBridge_h */
