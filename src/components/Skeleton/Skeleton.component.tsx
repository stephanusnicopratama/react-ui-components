import React from "react";
import type { SkeletonProps } from "./Skeleton.types";
import style from "./Skeleton.module.css";
import { classNames } from "utils/classNames";

const Skeleton = ({
  variant = "text",
  width,
  height,
  count = 1,
  className,
  ...rest
}: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={classNames(
            style["skeleton"],
            style[`skeleton__variant--${variant}`],
            className
          )}
          style={{
            width,
            height,
            marginBottom: index < count - 1 ? 8 : undefined,
          }}
          {...rest}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default Skeleton;
