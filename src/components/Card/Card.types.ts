import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'nude' | 'elevated';
}

export interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
