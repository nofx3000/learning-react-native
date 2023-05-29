package com.reactnativedemo.newarchitecture.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;

import com.reactnativedemo.R;

public class InfoView extends LinearLayout {
    public InfoView(Context context) {
        super(context);
        initView();
    }

    private void initView () {
    View view = LayoutInflater.from(getContext()).inflate(R.layout.layout_info_view, null);
    LayoutParams lp = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
    this.addView(view, lp);
    }
}
