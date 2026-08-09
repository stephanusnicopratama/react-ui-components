import React from "react";
import { render } from "@testing-library/react";

import Accordion from "./Accordion.component";

describe("Accordion", () => {
  test("renders the Accordion component", () => {
    render(
      <Accordion items={[{ title: "Title", content: "Content" }]} />
    );
  });
});
