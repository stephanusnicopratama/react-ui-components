import React from "react";
import type { TagProps } from "./Tag.types";
import style from "./Tag.module.css";
import { classNames } from "utils/classNames";

const Tag = ({ children, status = "pending", className }: TagProps) => {
  return (
    <span
      className={classNames(
        style["tag"],
        style[`tag__status--${status}`],
        className
      )}
    >
      <span className={style["tag-dot"]} />
      {children}
    </span>
  );
};

export default Tag;
