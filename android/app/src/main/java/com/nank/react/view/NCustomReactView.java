package com.nank.react.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;

/**
 * @author yuzongxu <yuzongxu@xiaoyouzi.com>
 * @since 2017/9/5
 */
public class NCustomReactView extends View {

    private Paint mPaint;
    private int radius = 50;
    private int color = Color.BLUE;

    private void init() {
        mPaint = new Paint(color);
        mPaint.setAntiAlias(true);
    }

    public NCustomReactView(Context context) {
        super(context);
        init();
    }

    public NCustomReactView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        Log.w("Jayuchou", "=== width == " + getWidth());
        Log.w("Jayuchou", "=== height == " + getHeight());
        canvas.drawCircle(200, 200, radius, mPaint);
    }

    public void setRadius(String radius) {
        this.radius = Integer.parseInt(radius);
        Log.w("Jayuchou", "=== radius == " + radius);
        invalidate();
    }

    public void setColor(String color) {
        if (!TextUtils.isEmpty(color)) {
            this.color = Color.MAGENTA;
            mPaint.setColor(this.color);
        }
        Log.w("Jayuchou", "=== color == " + color);
        invalidate();
    }
}
