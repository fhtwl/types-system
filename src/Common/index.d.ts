declare namespace Common {
  // 一般list
  export interface List {
    id?: number;
    [propsName: string]: any;
  }

  export interface TreeOption {
    id?: string;
    parentId?: string;
  }

  // tree节点
  export interface TreeNode {
    children: TreeNode[];
    serialNum: number;
    parentId: number;
    id: number;
    [propsName: string]: any;
  }

  export type SortType = "desc" | "asc";

  // 分页参数
  export interface PaginationParams {
    pageNum: number;
    pageSize: number;
    params: {
      [propsName: string]: unknown;
    };
  }
}
