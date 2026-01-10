import React from "react";
import type { DatePickerProps } from "./DatePicker.types";
import style from "./DatePicker.module.css";
import { classNames } from "utils/classNames";

const DatePicker = ({
  variant = "default",
  fullWidth,
  error,
  helperText,
  label,
  className,
  ...rest
}: DatePickerProps) => {
  return (
    <div
      className={classNames(
        style["datepicker-wrapper"],
        fullWidth && style["datepicker-wrapper__fullWidth"]
      )}
    >
      {label && <label className={style["datepicker-label"]}>{label}</label>}
      <input
        {...rest}
        type="date"
        className={classNames(
          style["datepicker"],
          style[`datepicker__variant--${variant}`],
          error && style["datepicker__error"],
          fullWidth && style["datepicker__fullWidth"],
          className
        )}
      />
      {helperText && (
        <span
          className={classNames(
            style["datepicker-helper-text"],
            error && style["datepicker-helper-text__error"]
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default DatePicker;
