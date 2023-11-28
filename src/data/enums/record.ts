export enum RecordSignState {
  WAITING = 0,
  SIGNED = 1,
  UNSIGNED = 2,
  APPLY_SIGN = 10,
  APPLY_SIGN_PASS = 11,
  APPLY_SIGN_REJECT = 12,
  APPLY_LEAVE = 20,
  APPLY_LEAVE_PASS = 21,
  APPLY_LEAVE_REJECT = 22,
}

export const RecordSignStateMapper: Record<RecordSignState, string> = {
  [RecordSignState.WAITING]: "Waiting to be signed in",
  [RecordSignState.SIGNED]: "Signed in",
  [RecordSignState.UNSIGNED]: "Not signed in",
  [RecordSignState.APPLY_SIGN]: "Apply for a replacement visa",
  [RecordSignState.APPLY_SIGN_PASS]: "The application is approved",
  [RecordSignState.APPLY_SIGN_REJECT]: "The application for a replacement visa is rejected",
  [RecordSignState.APPLY_LEAVE]: "Apply for leave",
  [RecordSignState.APPLY_LEAVE_PASS]: "Apply for leave approved",
  [RecordSignState.APPLY_LEAVE_REJECT]: "Leave refusal",
};
