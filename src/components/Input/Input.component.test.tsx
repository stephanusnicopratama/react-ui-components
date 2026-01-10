import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input.component";

describe("Input", () => {
  test("renders the Input component", () => {
    render(<Input />);
  });
});
