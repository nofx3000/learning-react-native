package com.reactnativedemo.newarchitecture.viewmanager;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.reactnativedemo.newarchitecture.view.InfoViewGroup;

public class InfoViewGroupManager extends ViewGroupManager<InfoViewGroup> {
    @NonNull
    @Override
    public String getName() {
        return "NativeInfoViewGroup";
    }

    @NonNull
    @Override
    protected InfoViewGroup createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return new InfoViewGroup(themedReactContext);
    }
}
