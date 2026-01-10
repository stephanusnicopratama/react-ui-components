import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "outline" | "filled";
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
}
