import { HTMLAttributes } from "react";

export interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  label?: string;
  direction?: "vertical" | "horizontal";
}
