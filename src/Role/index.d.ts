declare namespace System {
  export interface Role {
    id: number;
    menuList: System.Menu[];
    parentId: number;
    name: string;
  }
}
