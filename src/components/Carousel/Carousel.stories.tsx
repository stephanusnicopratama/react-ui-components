import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Carousel from "./Carousel.component";
import { CarouselProps } from "./Carousel.types";

export default {
  title: "Carousel",
  component: Carousel,
  argTypes: {
    autoPlay: { control: { type: "boolean" } },
    interval: { control: { type: "number" } },
    showArrows: { control: { type: "boolean" } },
    showDots: { control: { type: "boolean" } },
  },
} as Meta<CarouselProps>;

const Template: StoryFn<CarouselProps> = (args) => <Carousel {...args} />;

const slides = [
  <div
    style={{
      height: 200,
      background: "#00aed6",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
    }}
  >
    Slide 1
  </div>,
  <div
    style={{
      height: 200,
      background: "#0085ad",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
    }}
  >
    Slide 2
  </div>,
  <div
    style={{
      height: 200,
      background: "#0ed1ff",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
    }}
  >
    Slide 3
  </div>,
];

export const CarouselComponent = Template.bind({});
CarouselComponent.args = {
  children: slides,
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  children: slides,
  autoPlay: true,
  interval: 2000,
};

export const NoArrows = Template.bind({});
NoArrows.args = {
  children: slides,
  showArrows: false,
};

export const NoDots = Template.bind({});
NoDots.args = {
  children: slides,
  showDots: false,
};

export const SingleSlide = Template.bind({});
SingleSlide.args = {
  children: [slides[0]],
};
