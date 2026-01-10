import { TableHTMLAttributes } from "react";

export interface TableColumn {
  key: string;
  header: string;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: TableColumn[];
  data: Record<string, any>[];
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
}
