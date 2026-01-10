import React, { useState } from "react";
import type { TooltipProps } from "./Tooltip.types";
import style from "./Tooltip.module.css";
import { classNames } from "utils/classNames";

const Tooltip = ({
  children,
  content,
  position = "top",
  className,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={classNames(style["tooltip-wrapper"], className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={classNames(
            style["tooltip"],
            style[`tooltip__position--${position}`]
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
