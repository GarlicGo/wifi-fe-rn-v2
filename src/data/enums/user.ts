export enum UserSex {
  // UN_KNOW = 0,
  // MALE = 1,
  // FEMALE = 2,
  MALE = 0,
  FEMALE = 1,
}

export const UserSexMapper: Record<UserSex, string> = {
  // [UserSex.UN_KNOW]: 'UN_KNOW',
  [UserSex.MALE]: 'MALE',
  [UserSex.FEMALE]: 'FEMALE',
};

export enum UserRole {
  NORMAL = 0,
  ADMIN = 1,
}

export const UserRoleMapper: Record<UserRole, string> = {
  [UserRole.NORMAL]: 'Normal User',
  [UserRole.ADMIN]: 'Admin',
};
