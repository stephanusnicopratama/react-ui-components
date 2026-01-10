import { ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActiveTab?: number;
  variant?: "default" | "underline" | "pills";
  fullWidth?: boolean;
  className?: string;
}
