import { PermissionsAndroid } from 'react-native';
import { toast } from './toast';

export const requestWifiPermission = async function (
  callback?: () => void,
): Promise<boolean> {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Wi-Fi State Permission',
        message: 'App Needs Access to Wi-Fi State Permission',
        buttonNeutral: 'Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'Ok',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      callback?.();
      return true;
    } else {
      toast('Wi-Fi state permission denied');
      return false;
    }
  } catch (err) {
    return false;
  }
};
