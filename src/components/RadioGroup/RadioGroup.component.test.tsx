import React from "react";
import { render } from "@testing-library/react";

import RadioGroup from "./RadioGroup.component";

describe("RadioGroup", () => {
  test("renders the RadioGroup component", () => {
    render(
      <RadioGroup
        name="sample"
        options={[{ label: "Option A", value: "a" }]}
      />
    );
  });
});
