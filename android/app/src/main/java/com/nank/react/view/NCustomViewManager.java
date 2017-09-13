package com.nank.react.view;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * @author yuzongxu <yuzongxu@xiaoyouzi.com>
 * @since 2017/9/5
 */
@ReactModule(name = NCustomViewManager.CUSTOM_CLASS_NAME)
public class NCustomViewManager extends SimpleViewManager<NCustomReactView> {

    public static final String CUSTOM_CLASS_NAME = "NCustomReactView";

    @Override
    public String getName() {
        return CUSTOM_CLASS_NAME;
    }

    @Override
    protected NCustomReactView createViewInstance(ThemedReactContext reactContext) {
        return new NCustomReactView(reactContext);
    }

    @ReactProp(name = "color")
    public void setColor(NCustomReactView reactView, String color) {
        reactView.setColor(color);
    }

    @ReactProp(name = "radius")
    public void setRadius(NCustomReactView reactView, String radius) {
        reactView.setRadius(radius);
    }
}
