package com.nank.react.module;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.nank.MainActivity;
import com.nank.model.ApiResultModel;
import com.nank.retrofit.RetrofitHttpRequest;
import com.neacy.nank.BaseActivity;
import com.neacy.nank.LogUtil;
import com.neacy.nank.retrofit.RetrofitManager;
import com.trello.rxlifecycle2.android.ActivityEvent;

import org.greenrobot.eventbus.EventBus;

import java.util.List;

import io.reactivex.functions.Consumer;

/**
 * @author yuzongxu <yuzongxu@xiaoyouzi.com>
 * @since 2017/9/26
 */
public class HttpRequestModule extends ReactContextBaseJavaModule {

    private static final String TAG = "HttpRequestManager";

    public HttpRequestModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void doRequestGankList(int index, final Callback callback) {
        BaseActivity mActivity = (BaseActivity) getCurrentActivity();
        // 采用Retofit发起一次接口请求，并将获取到的数据写入到RN界面
        RetrofitHttpRequest.getInstance().getApiService().getAndroidList(String.valueOf(index))
                .compose(RetrofitManager.HTTPREQUEST_TRANSFORMER)
                .compose(mActivity.bindUntilEvent(ActivityEvent.DESTROY))
                .subscribe(new Consumer<Object>() {
                    @Override
                    public void accept(Object o) throws Exception {
                        List<ApiResultModel> results = (List<ApiResultModel>) o;
                        LogUtil.w(TAG, "=== result === " + results.size());
                        if (results.isEmpty()) {
                            callback.invoke(new Exception("empty error"));
                            return;
                        }

                        WritableArray wArray = Arguments.createArray();
                        for (ApiResultModel am : results) {
                            WritableMap wm = Arguments.createMap();
                            wm.putString("_id", am.get_id());
                            wm.putString("createdAt", am.getCreatedAt());
                            wm.putString("desc", am.getDesc());
                            wm.putString("publishedAt", am.getPublishedAt());
                            wm.putString("source", am.getSource());
                            wm.putString("type", am.getType());
                            wm.putString("url", am.getUrl());
                            wm.putBoolean("used", am.isUsed());
                            wm.putString("who", am.getWho());
                            wArray.pushMap(wm);
                        }
                        callback.invoke(wArray);
                        LogUtil.w(TAG, "--- Http Request Success ---");
                    }
                }, new Consumer<Throwable>() {
                    @Override
                    public void accept(Throwable throwable) throws Exception {
                        // 如果发生了错误的话  直接返回
                        callback.invoke(throwable);
                    }
                });
    }
}