package com.example.zhangmingzhao.rnandroid;

import javax.annotation.Nullable;

import com.facebook.react.ReactActivity;

public class MyReactActivity extends ReactActivity {
    @Nullable
    @Override
    protected String getMainComponentName() {        return "application";   //application即注册ReactNative时的名称;
    }
}
