import { HTMLAttributes } from "react";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  direction?: "vertical" | "horizontal";
  name?: string;
}
