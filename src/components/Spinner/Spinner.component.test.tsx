import React from "react";
import { render } from "@testing-library/react";

import Spinner from "./Spinner.component";

describe("Spinner", () => {
  test("renders the Spinner component", () => {
    render(<Spinner />);
  });
});
