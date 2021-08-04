import { Dimensions, Platform, StatusBar } from "react-native";

export const STATUS_BAR_HEIGHT = getStatusBarHeight();

export const height = Dimensions.get("window").height - STATUS_BAR_HEIGHT;
export const { width } = Dimensions.get("window");

export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;

/**
 * Get Status Bar Height
 */

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get("window");

let isIPhoneX = false;

if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
}

export function getStatusBarHeight() {
  return Platform.select({
    ios: isIPhoneX ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
  });
}
