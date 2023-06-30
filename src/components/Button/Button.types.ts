import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: "s" | "default";
}
