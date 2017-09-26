package com.neacy.nank.retrofit;

import com.neacy.nank.LogUtil;

import java.util.concurrent.TimeUnit;

import io.reactivex.Observable;
import io.reactivex.ObservableEmitter;
import io.reactivex.ObservableOnSubscribe;
import io.reactivex.ObservableSource;
import io.reactivex.ObservableTransformer;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.annotations.NonNull;
import io.reactivex.functions.Function;
import io.reactivex.schedulers.Schedulers;
import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * 单例返回retrofit对象
 * @author yuzongxu <yuzongxu@xiaoyouzi.com>
 * @since 2017/9/23
 */
public class RetrofitManager {

    private static final String BASE_URL = "http://gank.io/api/data/";

    private static class Holder {
        public static final RetrofitManager INSTANCE = new RetrofitManager();
    }

    private Retrofit mRetrofit;

    public static RetrofitManager getInstance() {
        return Holder.INSTANCE;
    }

    /**
     * 初始化retrofit
     */
    public void initRequest() {
        if (mRetrofit != null) return;
        OkHttpClient.Builder okBuilder = new OkHttpClient.Builder();
        if (LogUtil.isDebug) {// 只有是debug的环境下才需要打印信息
            HttpLoggingInterceptor logInterceptor = new HttpLoggingInterceptor();
            logInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
            okBuilder.addInterceptor(logInterceptor);
        }

        okBuilder.connectTimeout(60, TimeUnit.SECONDS);
        okBuilder.readTimeout(60, TimeUnit.SECONDS);
        okBuilder.writeTimeout(60, TimeUnit.SECONDS);
        OkHttpClient newClient = okBuilder.build();

        mRetrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .client(newClient)
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    public Retrofit getRetrofit() {
        if (mRetrofit == null) {
            initRequest();
        }
        return mRetrofit;
    }

    /**
     * 不打断的链式直接转换Http的请求结果..
     */
    public static final ObservableTransformer<NetResponse, Object> HTTPREQUEST_TRANSFORMER = new ObservableTransformer<NetResponse, Object>() {
        @Override
        public ObservableSource<Object> apply(@NonNull Observable<NetResponse> upstream) {
            return upstream.map(new Function<NetResponse, Object>() {
                @Override
                public Object apply(@NonNull NetResponse netResponse) throws Exception {
                    LogUtil.w("Jayuchou", "==== netResponse ==== " + netResponse.toString());
                    return netResponse.getResults();
                }
            }).subscribeOn(Schedulers.io()).subscribeOn(AndroidSchedulers.mainThread());
        }
    };

    private static ObservableTransformer mObservableTransformer;

    public static <T> ObservableTransformer<NetResponse<T>, T> applyHttpTransformer() {
//        if (mObservableTransformer == null) {
        return new ObservableTransformer<NetResponse<T>, T>() {
            @Override
            public ObservableSource<T> apply(@NonNull Observable<NetResponse<T>> upstream) {
                return upstream.map(new Function<NetResponse<T>, T>() {
                    @Override
                    public T apply(@NonNull NetResponse<T> tNetResponse) throws Exception {
                        return tNetResponse.getResults();
                    }
                }).subscribeOn(Schedulers.io()).subscribeOn(AndroidSchedulers.mainThread());
            }
        };
//        }
//        return mObservableTransformer;
    }
}
