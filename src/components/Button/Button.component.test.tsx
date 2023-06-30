import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button.component";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button />);
  });
});
