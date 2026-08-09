import React from "react";
import { render } from "@testing-library/react";

import Carousel from "./Carousel.component";

describe("Carousel", () => {
  test("renders the Carousel component", () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
  });
});
