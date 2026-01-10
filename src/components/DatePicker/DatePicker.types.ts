import { InputHTMLAttributes } from "react";

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: "default" | "outline" | "filled";
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
}
