package com.nank.retrofit;

import com.neacy.nank.retrofit.RetrofitManager;

/**
 * @author yuzongxu <yuzongxu@xiaoyouzi.com>
 * @since 2017/9/24
 */
public class RetrofitHttpRequest {

    private static final class Holder {
        private static final RetrofitHttpRequest INSTANCE = new RetrofitHttpRequest();
    }

    public static RetrofitHttpRequest getInstance() {
        return Holder.INSTANCE;
    }

    private RetrofitHttpRequest() {
        if (mApiService == null) {
            mApiService = RetrofitManager.getInstance().getRetrofit().create(ApiService.class);
        }
    }

    private ApiService mApiService;

    public ApiService getApiService() {
        return mApiService;
    }
}
