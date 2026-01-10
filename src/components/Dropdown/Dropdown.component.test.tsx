import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown.component";

describe("Dropdown", () => {
  test("renders the Dropdown component", () => {
    render(
      <Dropdown
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
      />
    );
  });
});
