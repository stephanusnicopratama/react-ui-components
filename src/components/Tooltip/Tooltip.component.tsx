import React, { useState, useCallback, useRef } from "react";
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  }, []);

  const hide = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsVisible(false), 100);
  }, []);

  const toggle = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return (
    <div
      className={classNames(style["tooltip-wrapper"], className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onClick={toggle}
      tabIndex={0}
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
