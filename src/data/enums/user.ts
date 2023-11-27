export enum UserSex {
  // UN_KNOW = 0,
  // MALE = 1,
  // FEMALE = 2,
  MALE = 0,
  FEMALE = 1,
}

export const UserSexMapper: Record<UserSex, string> = {
  // [UserSex.UN_KNOW]: '未知',
  [UserSex.MALE]: '男',
  [UserSex.FEMALE]: '女',
};

export enum UserRole {
  NORMAL = 0,
  ADMIN = 1,
}

export const UserRoleMapper: Record<UserRole, string> = {
  [UserRole.NORMAL]: '普通用户',
  [UserRole.ADMIN]: '管理员',
};
