import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import RadioGroup from "./RadioGroup.component";
import { RadioGroupProps } from "./RadioGroup.types";

export default {
  title: "RadioGroup",
  component: RadioGroup,
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
} as Meta<RadioGroupProps>;

const Template: StoryFn<RadioGroupProps> = (args) => {
  const [value, setValue] = useState<string>("");
  return <RadioGroup {...args} value={value} onChange={setValue} />;
};

const sampleOptions = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

export const RadioGroupComponent = Template.bind({});
RadioGroupComponent.args = {
  label: "Choose an option",
  name: "sample",
  options: sampleOptions,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  label: "Choose an option",
  name: "sample",
  options: sampleOptions,
  direction: "horizontal",
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: "Choose an option",
  name: "sample",
  options: [
    ...sampleOptions,
    { label: "Option D (disabled)", value: "d", disabled: true },
  ],
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  name: "sample",
  options: sampleOptions,
};
