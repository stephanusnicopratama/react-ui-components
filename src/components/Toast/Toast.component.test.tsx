import React from "react";
import { render } from "@testing-library/react";

import Toast from "./Toast.component";

describe("Toast", () => {
  test("renders the Toast component", () => {
    render(
      <Toast
        open
        onClose={() => {}}
        title="Title"
        description="Description"
      />
    );
  });
});
