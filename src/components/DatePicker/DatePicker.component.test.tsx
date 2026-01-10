import React from "react";
import { render } from "@testing-library/react";

import DatePicker from "./DatePicker.component";

describe("DatePicker", () => {
  test("renders the DatePicker component", () => {
    render(<DatePicker />);
  });
});
