package com.nank.retrofit;

import com.nank.model.ApiResultModel;
import com.neacy.nank.retrofit.NetResponse;

import java.util.List;

import io.reactivex.Observable;
import retrofit2.http.GET;
import retrofit2.http.Path;

/**
 * 网络请求接口
 * @author yuzongxu <yuzongxu@xiaoyouzi.com>
 * @since 2017/9/23
 */
public interface ApiService {

    @GET("all/10/{index}")
    Observable<NetResponse<List<ApiResultModel>>> getAndroidList(@Path("index") String index);
}
