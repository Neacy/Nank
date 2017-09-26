package com.nank;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.nank.model.ApiResultModel;
import com.nank.retrofit.RetrofitHttpRequest;
import com.neacy.nank.BaseActivity;
import com.neacy.nank.LogUtil;
import com.neacy.nank.retrofit.NetResponse;
import com.neacy.nank.retrofit.RetrofitManager;
import com.trello.rxlifecycle2.android.ActivityEvent;

import java.util.List;

import io.reactivex.ObservableTransformer;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Consumer;

public class MainActivity extends BaseActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Nank";
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }
}
