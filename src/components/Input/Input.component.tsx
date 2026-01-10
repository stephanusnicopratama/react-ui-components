import React from "react";
import type { InputProps } from "./Input.types";
import style from "./Input.module.css";
import { classNames } from "utils/classNames";

const Input = ({
  variant = "default",
  fullWidth,
  error,
  helperText,
  label,
  className,
  ...rest
}: InputProps) => {
  return (
    <div
      className={classNames(
        style["input-wrapper"],
        fullWidth && style["input-wrapper__fullWidth"]
      )}
    >
      {label && <label className={style["input-label"]}>{label}</label>}
      <input
        {...rest}
        className={classNames(
          style["input"],
          style[`input__variant--${variant}`],
          error && style["input__error"],
          fullWidth && style["input__fullWidth"],
          className
        )}
      />
      {helperText && (
        <span
          className={classNames(
            style["input-helper-text"],
            error && style["input-helper-text__error"]
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
