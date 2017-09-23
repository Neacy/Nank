package com.nank;

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
}
