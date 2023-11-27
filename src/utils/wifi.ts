import { fetch } from '@react-native-community/netinfo';
import { requestWifiPermission } from './permission';

interface WifiInfo {
  bssid?: string;
  ssid?: string;
  ipAddress?: string;
}

export const getWifiInfo = async (): Promise<WifiInfo> => {
  const granted = await requestWifiPermission();

  if (granted) {
    const info = await fetch();
    return (info?.details as WifiInfo) ?? {};
  }

  return {};
};
