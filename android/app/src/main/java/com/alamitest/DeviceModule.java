package com.alamitest;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

public class DeviceModule extends ReactContextBaseJavaModule {
    DeviceModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "DeviceModule";
    }

    @ReactMethod
    public void getDeviceID(final Promise promise) throws UnsupportedEncodingException {
        String deviceID = "";

        String androidId = android.provider.Settings.Secure.getString(getReactApplicationContext().getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);

        UUID androidId_UUID = UUID
                .nameUUIDFromBytes(androidId.getBytes("utf8"));

        deviceID = androidId_UUID.toString();

        if (!deviceID.isEmpty()) {
            promise.resolve(deviceID);
        } else {
            promise.reject("Device ID not initialize.");
            return;
        }
    }
}
