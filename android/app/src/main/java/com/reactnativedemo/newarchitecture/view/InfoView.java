package com.reactnativedemo.newarchitecture.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.drawable.GlideDrawable;
import com.bumptech.glide.request.target.Target;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.reactnativedemo.R;

public class InfoView extends LinearLayout implements View.OnClickListener {

    ImageView avatarImg;

    TextView nameTxt;

    TextView descTxt;

    TextView changeButton;

    private String shape = "circle";

    public InfoView(Context context) {
        super(context);
        initView();
    }

    private void initView () {
    View view = LayoutInflater.from(getContext()).inflate(R.layout.layout_info_view, null);

    avatarImg = view.findViewById(R.id.img_avatar);
    nameTxt = view.findViewById((R.id.text_name));
    descTxt = view.findViewById((R.id.text_desc));
    changeButton = view.findViewById(R.id.changeButton);
    changeButton.setOnClickListener(this);



    LayoutParams lp = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
    this.addView(view, lp);
    }

    @Override
    public void onClick(View v) {
        if (this.shape == "circle") {
            this.shape = "round";
        } else {
            this.shape = "circle";
        }
        WritableMap params = Arguments.createMap();
        params.putString("shape", this.shape);
        ReactContext context = (ReactContext)getContext();
        context.getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "onShapeChange", params);
    }

    public void setAvatar(String url) {
    }

    public void setName(String name) {
        nameTxt.setText(name);
    }

    public void setDesc(String desc) {
        descTxt.setText(desc);
    }

    public void setShape(String shape) {
        this.shape = shape;
    }


}
