import React from "react";
import type { CheckboxGroupProps } from "./CheckboxGroup.types";
import style from "./CheckboxGroup.module.css";
import { classNames } from "utils/classNames";

const CheckboxGroup = ({
  options,
  value = [],
  onChange,
  label,
  direction = "vertical",
  className,
}: CheckboxGroupProps) => {
  const handleToggle = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange?.(newValue);
  };

  return (
    <div className={classNames(style["checkbox-group"], className)}>
      {label && <span className={style["checkbox-group-label"]}>{label}</span>}
      <div
        className={classNames(
          style["checkbox-group-options"],
          style[`checkbox-group-options__${direction}`]
        )}
      >
        {options.map((option) => {
          const checked = value.includes(option.value);
          return (
            <label
              key={option.value}
              className={classNames(
                style["checkbox-option"],
                option.disabled && style["checkbox-option__disabled"]
              )}
            >
              <input
                type="checkbox"
                className={style["checkbox-option-input"]}
                checked={checked}
                disabled={option.disabled}
                onChange={() => handleToggle(option.value)}
              />
              <span className={style["checkbox-option-box"]}>
                {checked && <span className={style["checkbox-option-check"]}>✓</span>}
              </span>
              <span className={style["checkbox-option-label"]}>
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
