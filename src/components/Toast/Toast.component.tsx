import React, { useEffect } from "react";
import type { ToastProps } from "./Toast.types";
import style from "./Toast.module.css";
import { classNames } from "utils/classNames";
import ReactDOM from "react-dom";

const ICONS = {
  success: "✓",
  error: "✕",
  info: "ℹ",
  warning: "!",
};

const Toast = ({
  open,
  onClose,
  title,
  description,
  type = "info",
  duration = 3000,
  position = "top-right",
  className,
}: ToastProps) => {
  useEffect(() => {
    if (!open || duration <= 0) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      role="alert"
      className={classNames(
        style["toast-container"],
        style[`toast-container__${position}`]
      )}
    >
      <div
        className={classNames(
          style["toast"],
          style[`toast__type--${type}`],
          className
        )}
      >
        <span className={style["toast-icon"]}>{ICONS[type]}</span>
        <div className={style["toast-content"]}>
          {title && <div className={style["toast-title"]}>{title}</div>}
          {description && (
            <div className={style["toast-description"]}>{description}</div>
          )}
        </div>
        <button
          type="button"
          className={style["toast-close"]}
          onClick={onClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Toast;
