import {
    http,
    transformResponse,
  } from '../utils';
  
  export const testHttps = async (): Promise<string> => {
    const res = await fetch('https://facebook.github.io/react-native/movies.json');
    return (await res?.json())?.title;
  };