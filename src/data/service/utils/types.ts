// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Response<T = any> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}

export interface ListRequestParams {
  current?: number;
  pageSize?: number;
}

export interface ListResponse<T> {
  /**
   * 上一页的页码（如果当前是第一页，则prev返回-1，表示没有上一页）
   */
  prev: number;

  /**
   * 下一页的页码（如果当前是最后一页，则next返回-1，表示没有下一页）
   */
  next: number;

  /**
   * 一共有多少条符合要求
   */
  total: number;

  /**
   * 数据列表
   */
  list: T[];
}
