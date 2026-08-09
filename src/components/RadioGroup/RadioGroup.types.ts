import { ReactNode } from "react";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  direction?: "vertical" | "horizontal";
  name?: string;
  className?: string;
  children?: ReactNode;
}
