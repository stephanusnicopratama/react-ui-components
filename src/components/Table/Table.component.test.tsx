import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table.component";

describe("Table", () => {
  test("renders the Table component", () => {
    render(
      <Table
        columns={[
          { key: "id", header: "ID" },
          { key: "name", header: "Name" },
        ]}
        data={[
          { id: "1", name: "Test" },
          { id: "2", name: "Test 2" },
        ]}
      />
    );
  });
});
