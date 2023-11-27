import { RecordSignState } from '..';

export interface SignRecord {
  recordId: string;
  taskName: string;
  groupName: string;
  placeName: string;
  userName: string;
  signTime: string;
  signState: RecordSignState;
  resignReason: string;
  leaveReason: string;
}
