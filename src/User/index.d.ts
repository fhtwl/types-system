declare namespace System {
  // userId
  export type Uid = number;

  // 权限id
  export type Scope = string;

  export interface Decode {
    scope: Scope;
    uid: Uid;
    exp?: number;
    iat?: number;
  }

  export interface UserInfo {
    nickName: string;
    avatar: string;
    profile: string;
  }

  export interface User {
    id: Uid;
    info: UserInfo;
    infoStr: string;
    userName: string;
    email: string;
    password: string;
    openId?: string;
    roleIds: Scope;
  }

  export interface Role {
    id: number;
    parentId: number;
    menuIds: string;
    children: Role[];
  }

  export interface Action {
    id: number;
    serialNum: number;
    permission: string;
  }
}
