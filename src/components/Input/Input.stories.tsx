import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input.component";
import { InputProps } from "./Input.types";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["default", "outline", "filled"],
      control: { type: "select" },
    },
    disabled: {
      options: [true, false],
      control: { type: "select" },
    },
    error: {
      options: [true, false],
      control: { type: "select" },
    },
  },
} as Meta<InputProps>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const InputComponent = Template.bind({});
InputComponent.args = {
  placeholder: "Enter text...",
  label: "Label",
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: "Enter text...",
  label: "Email",
  error: true,
  helperText: "This field is required",
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: "Enter text...",
  label: "Search",
  variant: "filled",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Enter text...",
  label: "Disabled Input",
  disabled: true,
  value: "Cannot edit",
};
