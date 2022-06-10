declare namespace System {
  export interface Role {
    id: number;
    menuList: Menu.Menu[];
    parentId: number;
    name: string;
  }
}
