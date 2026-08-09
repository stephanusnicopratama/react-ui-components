import React from "react";
import { render } from "@testing-library/react";

import Skeleton from "./Skeleton.component";

describe("Skeleton", () => {
  test("renders the Skeleton component", () => {
    render(<Skeleton />);
  });

  test("renders the given count of items", () => {
    const { container } = render(<Skeleton count={3} />);
    expect(container.querySelectorAll("div[aria-hidden]")).toHaveLength(3);
  });
});
