import { PermissionsAndroid } from 'react-native';

export async function requestWifiPermission(callback: () => void) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Wi-Fi 状态授权',
        message: 'App 需要获取 WIFI 状态获取 BSSID',
        buttonNeutral: '稍后',
        buttonNegative: '取消',
        buttonPositive: '授权',
      },
    );
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_WIFI_STATE,
    //   {
    //     title: 'Wi-Fi 状态授权',
    //     message: 'App 需要获取 WIFI 状态获取 BSSID',
    //     buttonNeutral: '稍后',
    //     buttonNegative: '取消',
    //     buttonPositive: '授权',
    //   },
    // );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can access the Wi-Fi state');
      callback();
    } else {
      console.log('Wi-Fi state permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
