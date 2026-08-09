import { HTMLAttributes } from "react";

export type ToastType = "success" | "error" | "info" | "warning";
export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
}
