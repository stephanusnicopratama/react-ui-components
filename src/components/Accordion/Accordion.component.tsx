import React, { useState } from "react";
import type { AccordionProps } from "./Accordion.types";
import style from "./Accordion.module.css";
import { classNames } from "utils/classNames";

const Accordion = ({
  items,
  defaultOpenIndex = [],
  allowMultiple = false,
  className,
}: AccordionProps) => {
  const initialOpen = Array.isArray(defaultOpenIndex)
    ? defaultOpenIndex
    : [defaultOpenIndex];
  const [openIndices, setOpenIndices] = useState<number[]>(initialOpen);

  const toggle = (index: number) => {
    if (items[index].disabled) return;
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className={classNames(style["accordion"], className)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className={classNames(
              style["accordion-item"],
              isOpen && style["accordion-item__open"]
            )}
          >
            <button
              type="button"
              className={classNames(
                style["accordion-header"],
                item.disabled && style["accordion-header__disabled"]
              )}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-disabled={item.disabled}
              disabled={item.disabled}
            >
              <span className={style["accordion-title"]}>{item.title}</span>
              <span
                className={classNames(
                  style["accordion-icon"],
                  isOpen && style["accordion-icon__open"]
                )}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            <div
              className={style["accordion-panel"]}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className={style["accordion-content"]}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
