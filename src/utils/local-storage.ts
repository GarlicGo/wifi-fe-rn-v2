import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_KEY } from '../common';
import { toast } from './toast';

export const storeLocalData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(value));
  } catch (e) {
    toast(`Save ${key} failed`);
  }
};

export const getLocalData = async (key: string): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    toast(`Read ${key} failed`);
  }
};

export const removeLocalData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    toast(`Delete ${key} failed`);
  }
};

export const storeToken = async (value: string) => {
  await storeLocalData(TOKEN_KEY, value);
};

export const getToken = async (): Promise<string | null> => {
    return await getLocalData(TOKEN_KEY);
};

export const removeToken = async () => {
  await removeLocalData(TOKEN_KEY);
};