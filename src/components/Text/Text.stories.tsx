import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Text from "./Text.component";
import { TextProps } from "./Text.types";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    variant: {
      options: ["nude", "elevated"],
      control: { type: "select" },
    },

  },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const TextComponent = Template.bind({});
TextComponent.args = {
  children: "Hello world!",
};
