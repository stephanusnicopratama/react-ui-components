import { HTMLAttributes, ReactNode } from "react";

export interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  defaultOpenIndex?: number | number[];
  allowMultiple?: boolean;
}
