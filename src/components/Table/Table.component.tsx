import React from "react";
import type { TableProps } from "./Table.types";
import style from "./Table.module.css";
import { classNames } from "utils/classNames";

const Table = ({
  columns,
  data,
  striped,
  bordered,
  hoverable,
  fullWidth,
  className,
  ...rest
}: TableProps) => {
  return (
    <div
      className={classNames(
        style["table-container"],
        fullWidth && style["table-container__fullWidth"]
      )}
    >
      <table
        {...rest}
        className={classNames(
          style["table"],
          striped && style["table__striped"],
          bordered && style["table__bordered"],
          hoverable && style["table__hoverable"],
          fullWidth && style["table__fullWidth"],
          className
        )}
      >
        <thead className={style["table-head"]}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={classNames(
                  style["table-header"],
                  style[`table-header__align--${column.align || "left"}`]
                )}
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style["table-body"]}>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={style["table-row"]}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={classNames(
                    style["table-cell"],
                    style[`table-cell__align--${column.align || "left"}`]
                  )}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
