package com.nank;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.neacy.nank.BaseActivity;

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
