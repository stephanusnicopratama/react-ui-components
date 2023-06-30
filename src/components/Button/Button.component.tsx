import React from "react";
import type { ButtonProps } from "./Button.types";
import style from "./Button.module.css";
import { classNames } from "utils/classNames";

const Button = ({
  children,
  fullWidth,
  variant = "primary",
  className,
  icon,
  iconPosition = "left",
  size = "default",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames(
        style["button"],
        style[`button__variant--${variant}`],
        style[`button__icon-position--${iconPosition}`],
        size !== "default" && style[`button__size--${size}`],
        fullWidth && style["button__fullWidth"],
        className
      )}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
