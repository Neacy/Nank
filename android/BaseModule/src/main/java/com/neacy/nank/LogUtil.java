package com.neacy.nank;

public class LogUtil {
	public static boolean isDebug = true;

	public static void v(String tag, String msg) {
		if (isDebug)
			android.util.Log.v(tag, msg);
	}

	public static void d(String tag, String msg) {
		if (isDebug)
			android.util.Log.d(tag, msg);
	}

	public static void i(String tag, String msg) {
		if (isDebug)
			android.util.Log.i(tag, msg);
	}

	public static void w(String tag, String msg) {
		if (isDebug)
			android.util.Log.w(tag, msg);
	}

	public static void e(String tag, String msg) {
		if (isDebug)
			android.util.Log.e(tag, msg);
	}
}