import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Spinner from "./Spinner.component";
import { SpinnerProps } from "./Spinner.types";

export default {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    color: {
      control: { type: "color" },
    },
  },
} as Meta<SpinnerProps>;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const SpinnerComponent = Template.bind({});
SpinnerComponent.args = {
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  size: "medium",
  color: "#ef4444",
};

export const Multiple = () => (
  <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
    <Spinner size="small" />
    <Spinner size="medium" />
    <Spinner size="large" />
  </div>
);
