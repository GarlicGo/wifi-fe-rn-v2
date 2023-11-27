import React, { useEffect } from 'react';
import { View } from 'react-native';
import { getToken } from '../utils';

interface Props {
  children?: React.ReactNode;
}

const detectInitLoginStatus = async () => {
  const token = await getToken();
  console.log('AppInitial Token:', token);

  if (!token) {
    // router.replace('/(aux)/login');
  }
};

export const AppInitial: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    detectInitLoginStatus();
  }, []);

  return (
    <View>
      {children}
    </View>
  );
};
