import React from "react";
import { render } from "@testing-library/react";

import CheckboxGroup from "./CheckboxGroup.component";

describe("CheckboxGroup", () => {
  test("renders the CheckboxGroup component", () => {
    render(
      <CheckboxGroup
        options={[{ label: "Apple", value: "apple" }]}
      />
    );
  });
});
