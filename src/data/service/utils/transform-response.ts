/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { ListResponse, Response } from './types';
import { BizError, ServiceError } from './service-error';

export const transformResponse = <T = any>(res: AxiosResponse<Response<T>>): T => {
  if (res.status >= 200 && res.status < 300) {
    const { success, message, code, data } = res.data;
    if (!success) {
      throw new BizError(code, message || '未知错误');
    }

    return data;
  } else {
    throw new ServiceError(res?.status, '网络错误');
  }
};


export const transformList = <T = any[]>(res: any, transform?: (item: any) => T): ListResponse<T> => {
  const transformRes = transformResponse(res);
  const arr = Array.isArray(transformRes?.list) ? transformRes?.list : [];
  return {
    next: transformRes?.next ?? -1,
    prev: transformRes?.prev ?? -1,
    total: transformRes?.total ?? 0,
    list: transform ? arr.map((item: any) => transform(item)) : arr,
  };
};
