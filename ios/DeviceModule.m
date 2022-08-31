//
//  DeviceModule.m
//  AlamiTest
//
//  Created by Macbook  on 31/08/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface
RCT_EXTERN_MODULE(DeviceModule, NSObject)
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getDeviceID){
  return [[[UIDevice currentDevice] identifierForVendor] UUIDString];
}
@end
