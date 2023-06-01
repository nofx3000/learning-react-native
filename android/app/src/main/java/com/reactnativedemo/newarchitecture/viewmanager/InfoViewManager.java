package com.reactnativedemo.newarchitecture.viewmanager;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.reactnativedemo.newarchitecture.view.InfoView;

import java.util.Map;

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

    @ReactProp(name="avatar")
    public void setAvatar(InfoView view, String url) {
        view.setAvatar(url);
    }

    @ReactProp(name="name")
    public void setName(InfoView view, String name) {
        view.setName(name);
    }

    @ReactProp(name="desc")
    public void setDesc(InfoView view, String desc) {
        view.setDesc(desc);
    }

    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put("onShapeChange", MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", "onShapeChange"))).build();
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of("setShape", SET_SHAPE_CODE);
    }

    @Override
    public void receiveCommand(@NonNull InfoView view, String commandId, @Nullable ReadableArray args) {
        int command = Integer.parseInt(commandId);

        if (command == SET_SHAPE_CODE) {
            String shape = args.getString(0);
            view.setShape(shape);
        } else {
            // 其他情况
        }
    }

    public static final int SET_SHAPE_CODE = 100;
}
