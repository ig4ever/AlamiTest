//
//  DeviceModule.swift
//  AlamiTest
//
//  Created by Macbook  on 31/08/22.
//

import Foundation
import Promises

@objc(DeviceModule)
class DeviceModule: NSObject {
  
  @objc
  func getDeviceID() {
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
