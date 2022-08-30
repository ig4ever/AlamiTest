package com.alamitest;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Build;
import android.provider.Settings;
import android.telephony.TelephonyManager;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceModule extends ReactContextBaseJavaModule {
    DeviceModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "DeviceModule";
    }

    @SuppressLint("MissingPermission")
    @ReactMethod
    public void getDeviceID(final Promise promise) {
        String deviceID = "";
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            deviceID = Settings.Secure.getString(getReactApplicationContext().getContentResolver(), Settings.Secure.ANDROID_ID);
        } else {
            TelephonyManager tm = (TelephonyManager) getReactApplicationContext().getSystemService(Context.TELEPHONY_SERVICE);
            deviceID = tm.getDeviceId();
        }

        if (!deviceID.isEmpty()) {
            promise.resolve(deviceID);
        } else {
            promise.reject("Device ID not initialize.");
            return;
        }
    }
}
