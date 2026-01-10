import React, { useState, useRef, useEffect } from "react";
import type { DropdownProps } from "./Dropdown.types";
import style from "./Dropdown.module.css";
import { classNames } from "utils/classNames";

const Dropdown = ({
  options,
  placeholder = "Select an option",
  label,
  error,
  helperText,
  variant = "default",
  fullWidth,
  disabled,
  onChange,
  value,
  className,
  searchable = false,
  searchPlaceholder = "Search...",
  multiple = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | string[]>(
    value || (multiple ? [] : "")
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedValues = Array.isArray(selectedValue)
    ? selectedValue
    : selectedValue
    ? [selectedValue]
    : [];
  const selectedOptions = options.filter((opt) =>
    selectedValues.includes(opt.value)
  );

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    if (isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue: string) => {
    if (disabled) return;

    if (multiple) {
      const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      setSelectedValue(newValues);
      onChange?.(newValues);
    } else {
      setSelectedValue(optionValue);
      setIsOpen(false);
      setSearchQuery("");
      onChange?.(optionValue);
    }
  };

  const handleRemoveValue = (valueToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;

    const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
    const newValues = currentValues.filter((v) => v !== valueToRemove);
    setSelectedValue(newValues);
    onChange?.(newValues);
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchQuery("");
        setFocusedIndex(-1);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }
        break;
      case "Enter":
        e.preventDefault();
        if (isOpen && focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
          const option = filteredOptions[focusedIndex];
          if (!option.disabled) {
            handleSelect(option.value);
          }
        } else if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setSearchQuery("");
        setFocusedIndex(-1);
        break;
    }
  };

  return (
    <div
      className={classNames(
        style["dropdown-wrapper"],
        fullWidth && style["dropdown-wrapper__fullWidth"]
      )}
      ref={dropdownRef}
    >
      {label && <label className={style["dropdown-label"]}>{label}</label>}
      <div
        className={classNames(
          style["dropdown"],
          style[`dropdown__variant--${variant}`],
          error && style["dropdown__error"],
          disabled && style["dropdown__disabled"],
          isOpen && style["dropdown__open"],
          fullWidth && style["dropdown__fullWidth"],
          multiple && style["dropdown__multiple"],
          className
        )}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={disabled ? -1 : 0}
      >
        <div className={style["dropdown-selected"]}>
          {multiple && selectedOptions.length > 0 ? (
            <div className={style["dropdown-tags"]}>
              {selectedOptions.map((opt) => (
                <span key={opt.value} className={style["dropdown-tag"]}>
                  {opt.icon && (
                    <span className={style["dropdown-icon"]}>{opt.icon}</span>
                  )}
                  {opt.label}
                  <span
                    className={style["dropdown-tag-remove"]}
                    onClick={(e) => handleRemoveValue(opt.value, e)}
                  >
                    ×
                  </span>
                </span>
              ))}
            </div>
          ) : !multiple && selectedOptions.length > 0 ? (
            <>
              {selectedOptions[0].icon && (
                <span className={style["dropdown-icon"]}>
                  {selectedOptions[0].icon}
                </span>
              )}
              {selectedOptions[0].label}
            </>
          ) : (
            <span className={style["dropdown-selected__placeholder"]}>
              {placeholder}
            </span>
          )}
        </div>
        <span
          className={classNames(
            style["dropdown-arrow"],
            isOpen && style["dropdown-arrow__open"]
          )}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className={style["dropdown-menu"]}>
          {searchable && (
            <div className={style["dropdown-search-wrapper"]}>
              <input
                ref={searchInputRef}
                type="text"
                className={style["dropdown-search"]}
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          <ul className={style["dropdown-list"]} role="listbox">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                const isSelected = selectedValues.includes(option.value);
                const isFocused = index === focusedIndex;
                return (
                  <li
                    key={option.value}
                    className={classNames(
                      style["dropdown-option"],
                      isSelected && style["dropdown-option__selected"],
                      option.disabled && style["dropdown-option__disabled"],
                      isFocused && style["dropdown-option__focused"]
                    )}
                    onClick={() => !option.disabled && handleSelect(option.value)}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled}
                  >
                    {multiple && (
                      <span className={style["dropdown-checkbox"]}>
                        {isSelected && "✓"}
                      </span>
                    )}
                    {option.icon && (
                      <span className={style["dropdown-icon"]}>
                        {option.icon}
                      </span>
                    )}
                    {option.label}
                  </li>
                );
              })
            ) : (
              <li className={style["dropdown-no-results"]}>No results found</li>
            )}
          </ul>
        </div>
      )}
      {helperText && (
        <span
          className={classNames(
            style["dropdown-helper-text"],
            error && style["dropdown-helper-text__error"]
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
