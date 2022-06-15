declare namespace System {
  /**
   * 角色
   */
  export interface Role {
    id: number;
    menuList: System.Menu[];
    parentId: number;
    name: string;
  }
  /**
   * 角色权限
   */
  export interface Permission {
    name: string;
    roleId: number;
    id: number;
    menuType: System.MenuType;
    show: number;
    parentId: number;
    serialNum: number;
    permission: string;
    actions: System.Action[];
  }
}
