import React from "react";
import type { RadioGroupProps } from "./RadioGroup.types";
import style from "./RadioGroup.module.css";
import { classNames } from "utils/classNames";

const RadioGroup = ({
  options,
  value,
  onChange,
  label,
  direction = "vertical",
  name,
  className,
}: RadioGroupProps) => {
  return (
    <div className={classNames(style["radio-group"], className)}>
      {label && <span className={style["radio-group-label"]}>{label}</span>}
      <div
        className={classNames(
          style["radio-group-options"],
          style[`radio-group-options__${direction}`]
        )}
      >
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              className={classNames(
                style["radio-option"],
                option.disabled && style["radio-option__disabled"]
              )}
            >
              <input
                type="radio"
                className={style["radio-option-input"]}
                name={name}
                value={option.value}
                checked={checked}
                disabled={option.disabled}
                onChange={() => onChange?.(option.value)}
              />
              <span className={style["radio-option-circle"]}>
                {checked && <span className={style["radio-option-dot"]} />}
              </span>
              <span className={style["radio-option-label"]}>
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
