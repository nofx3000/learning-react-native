package com.reactnativedemo.newarchitecture.viewmanager;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.reactnativedemo.newarchitecture.view.InfoView;

public class InfoViewManager extends SimpleViewManager<InfoView> {

    @NonNull
    @Override
    public String getName() {
        return "NativeInfoView";
    }

    @NonNull
    @Override
    protected InfoView createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return new InfoView(themedReactContext);
    }
}
