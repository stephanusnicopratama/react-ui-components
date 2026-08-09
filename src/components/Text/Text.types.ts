import { HTMLAttributes } from "react";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLLabelElement> {
  as?: "p" | "label";
  bold?: boolean;
  className?: string;
  textAlignCenter?: boolean;
  onClick?: () => void;
  color?: "primary" | "error" | "secondary" | "disabled";
  fontSize?: "xs" | "s" | "default" | "l";
  htmlFor?: string;
}
