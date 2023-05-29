package com.reactnativedemo.newarchitecture.rn;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactnativedemo.BuildConfig;

import java.util.HashMap;
import java.util.Map;

public class AppModule extends ReactContextBaseJavaModule {
    public AppModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "App";
    }

    @Override
    public Map<String, Object> getConstants() {
        Map map = new HashMap<String, Object>();
        map.put("versionName", BuildConfig.VERSION_NAME);
        map.put("versionCode", BuildConfig.VERSION_CODE);
        return map;
    }

    @ReactMethod
    public void openGallery() {
        if (getCurrentActivity() == null) {
            return;
        }
        com.reactnativedemo.newarchitecture.utils.DeviceUtil.openGallery(getCurrentActivity());
    }
}
