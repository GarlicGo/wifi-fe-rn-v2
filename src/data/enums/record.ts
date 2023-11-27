export enum RecordSignState {
    // 待签到
    WAITING = 0,
    // 已签到
    SIGNED = 1,
    // 未签到
    UNSIGNED = 2,
    // 申请补签
    APPLY_SIGN = 10,
    // 申请补签通过
    APPLY_SIGN_PASS = 11,
    // 申请补签拒绝
    APPLY_SIGN_REJECT = 12,
    // 申请请假
    APPLY_LEAVE = 20,
    // 申请请假通过
    APPLY_LEAVE_PASS = 21,
    // 申请请假拒绝
    APPLY_LEAVE_REJECT = 22,
  }
  
  export const RecordSignStateMapper: Record<RecordSignState, string> = {
    [RecordSignState.WAITING]: '待签到',
    [RecordSignState.SIGNED]: '已签到',
    [RecordSignState.UNSIGNED]: '未签到',
    [RecordSignState.APPLY_SIGN]: '申请补签',
    [RecordSignState.APPLY_SIGN_PASS]: '申请补签通过',
    [RecordSignState.APPLY_SIGN_REJECT]: '申请补签拒绝',
    [RecordSignState.APPLY_LEAVE]: '申请请假',
    [RecordSignState.APPLY_LEAVE_PASS]: '申请请假通过',
    [RecordSignState.APPLY_LEAVE_REJECT]: '申请请假拒绝',
  };
  