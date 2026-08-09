import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import CheckboxGroup from "./CheckboxGroup.component";
import { CheckboxGroupProps } from "./CheckboxGroup.types";

export default {
  title: "CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
} as Meta<CheckboxGroupProps>;

const Template: StoryFn<CheckboxGroupProps> = (args) => {
  const [value, setValue] = useState<string[]>([]);
  return <CheckboxGroup {...args} value={value} onChange={setValue} />;
};

const sampleOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export const CheckboxGroupComponent = Template.bind({});
CheckboxGroupComponent.args = {
  label: "Fruits",
  options: sampleOptions,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  label: "Fruits",
  options: sampleOptions,
  direction: "horizontal",
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: "Fruits",
  options: [
    ...sampleOptions,
    { label: "Durian", value: "durian", disabled: true },
  ],
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  options: sampleOptions,
};
