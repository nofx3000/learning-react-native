package com.reactnativedemo.newarchitecture.rn;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reactnativedemo.newarchitecture.viewmanager.InfoViewGroupManager;
import com.reactnativedemo.newarchitecture.viewmanager.InfoViewManager;

import java.util.ArrayList;
import java.util.List;

public class DemoPackage implements ReactPackage {

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactApplicationContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AppModule(reactApplicationContext));
        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new InfoViewManager());
        viewManagers.add(new InfoViewGroupManager());
        return viewManagers;
    }
}
