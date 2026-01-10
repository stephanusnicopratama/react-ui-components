import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button.component";
import { ButtonProps } from "./Button.types";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    disabled: {
      options: [true, false],
      control: { type: "select" },
    },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  children: "Hello world!",
};
