import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Card from "./Card.component";
import { CardProps } from "./Card.types";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    variant: {
      options: ["nude", "elevated"],
      control: { type: "select" },
    },
  },
} as Meta<CardProps>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
CardComponent.args = {
  children: "Hello world!",
};
