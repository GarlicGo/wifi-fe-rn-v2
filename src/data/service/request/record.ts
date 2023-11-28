import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PAGE_SIZE,
  ListRequestParams,
  ListResponse,
  http,
  transformList,
  transformResponse,
} from "../utils";
import { RequestID, SignRecord } from "../../entities";

export const getCanSign = async (): Promise<boolean> => {
  const res = await http.get("/api/records/hasAnyRecord");
  return transformResponse(res);
};

export const sign = async (macAddress: string): Promise<void> => {
  const res = await http.put("/api/records/sign", {
    macAddress,
  });
  return transformResponse(res);
};

export const getMySignRecordList = async ({
  current = DEFAULT_CURRENT_PAGE,
  pageSize = DEFAULT_PAGE_SIZE,
}: ListRequestParams): Promise<ListResponse<SignRecord>> => {
  const res = await http.get("/api/records", {
    params: {
      current,
      pageSize,
    },
  });
  return transformList(res);
};

export const resign = async ({
  recordId,
  reason,
}: {
  recordId: RequestID;
  reason: string;
}): Promise<void> => {
  const res = await http.put(`/api/records/${recordId}/resigns`, {
    reason,
  });
  return transformResponse(res);
};

export const applyLeave = async ({
  recordId,
  reason,
}: {
  recordId: RequestID;
  reason: string;
}): Promise<void> => {
  console.log('applyLeave', recordId, reason);
  
  const res = await http.put(`/api/records/${recordId}/leaves`, {
    reason,
  });
  return transformResponse(res);
};
