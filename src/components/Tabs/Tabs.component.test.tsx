import React from "react";
import { render } from "@testing-library/react";

import Tabs from "./Tabs.component";

describe("Tabs", () => {
  test("renders the Tabs component", () => {
    render(
      <Tabs
        tabs={[
          { label: "Tab 1", content: <div>Content 1</div> },
          { label: "Tab 2", content: <div>Content 2</div> },
        ]}
      />
    );
  });
});
