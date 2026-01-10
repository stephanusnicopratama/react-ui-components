import { ReactNode } from "react";

export interface DropdownOption {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  variant?: "default" | "outline" | "filled";
  fullWidth?: boolean;
  disabled?: boolean;
  onChange?: (value: string | string[]) => void;
  value?: string | string[];
  className?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  multiple?: boolean;
}
