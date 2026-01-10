import React, { useState } from "react";
import type { TabsProps } from "./Tabs.types";
import style from "./Tabs.module.css";
import { classNames } from "utils/classNames";

const Tabs = ({
  tabs,
  defaultActiveTab = 0,
  variant = "default",
  fullWidth,
  className,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <div className={classNames(style["tabs-container"], className)}>
      <div
        className={classNames(
          style["tabs-list"],
          style[`tabs-list__variant--${variant}`],
          fullWidth && style["tabs-list__fullWidth"]
        )}
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames(
              style["tab"],
              style[`tab__variant--${variant}`],
              activeTab === index && style["tab__active"],
              activeTab === index && style[`tab__active--${variant}`],
              tab.disabled && style["tab__disabled"],
              fullWidth && style["tab__fullWidth"]
            )}
            onClick={() => !tab.disabled && setActiveTab(index)}
            disabled={tab.disabled}
            role="tab"
            aria-selected={activeTab === index}
            aria-disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={style["tab-content"]} role="tabpanel">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
