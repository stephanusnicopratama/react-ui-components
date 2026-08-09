import { HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circle" | "rect";
  width?: number | string;
  height?: number | string;
  count?: number;
}
