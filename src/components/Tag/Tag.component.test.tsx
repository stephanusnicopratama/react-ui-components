import React from "react";
import { render } from "@testing-library/react";

import Tag from "./Tag.component";

describe("Tag", () => {
  test("renders the Tag component", () => {
    render(<Tag status="success">Success</Tag>);
  });
});
