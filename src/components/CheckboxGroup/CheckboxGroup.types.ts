import { ReactNode } from "react";

export interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  label?: string;
  direction?: "vertical" | "horizontal";
  className?: string;
  children?: ReactNode;
}
