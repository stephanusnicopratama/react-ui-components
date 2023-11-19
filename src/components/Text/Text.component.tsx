import { classNames } from "utils/classNames";
import style from "./Text.module.css";
import React from "react";
import { TextProps } from "./Text.types";

const Text = ({
  children,
  bold,
  className,
  textAlignCenter,
  color,
  onClick,
  fontSize = "default",
  as: As = "p",
  htmlFor,
  ...rest
}: TextProps) => {
  return (
    <As
      {...rest}
      htmlFor={htmlFor}
      onClick={onClick}
      className={classNames(
        style["text"],
        bold && style["text--bold"],
        style[`text__color--${color}`],
        style[`text__fontSize--${fontSize}`],
        textAlignCenter && style["text--align-center"],
        onClick && style["text--clickable"],
        className
      )}
    >
      {children}
    </As>
  );
};

export default Text;
