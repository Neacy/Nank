package com.neacy.nank.retrofit;

/**
 * @author yuzongxu <yuzongxu@xiaoyouzi.com>
 * @since 2017/9/24
 */
public class NetResponse<T> {
    private String error;
    private T results;

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public T getResults() {
        return results;
    }

    public void setResults(T results) {
        this.results = results;
    }
}
