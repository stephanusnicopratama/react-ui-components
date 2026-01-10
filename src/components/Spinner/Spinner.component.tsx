import React from "react";
import type { SpinnerProps } from "./Spinner.types";
import style from "./Spinner.module.css";
import { classNames } from "utils/classNames";

const Spinner = ({
  size = "medium",
  color,
  className,
}: SpinnerProps) => {
  return (
    <div
      className={classNames(
        style["spinner"],
        style[`spinner__size--${size}`],
        className
      )}
      style={color ? { borderTopColor: color } : undefined}
      role="status"
      aria-label="Loading"
    >
      <span className={style["spinner-sr-only"]}>Loading...</span>
    </div>
  );
};

export default Spinner;
