import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Tooltip from "./Tooltip.component";
import { TooltipProps } from "./Tooltip.types";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    position: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
    },
  },
} as Meta<TooltipProps>;

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

export const TooltipComponent = Template.bind({});
TooltipComponent.args = {
  content: "This is a tooltip",
  children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: "Tooltip on bottom",
  position: "bottom",
  children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
};

export const Left = Template.bind({});
Left.args = {
  content: "Tooltip on left",
  position: "left",
  children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
};

export const Right = Template.bind({});
Right.args = {
  content: "Tooltip on right",
  position: "right",
  children: <button style={{ padding: "8px 16px" }}>Hover me</button>,
};

export const AllPositions = () => (
  <div style={{ display: "flex", gap: "100px", padding: "100px", flexWrap: "wrap" }}>
    <Tooltip content="Top tooltip" position="top">
      <button style={{ padding: "8px 16px" }}>Top</button>
    </Tooltip>
    <Tooltip content="Bottom tooltip" position="bottom">
      <button style={{ padding: "8px 16px" }}>Bottom</button>
    </Tooltip>
    <Tooltip content="Left tooltip" position="left">
      <button style={{ padding: "8px 16px" }}>Left</button>
    </Tooltip>
    <Tooltip content="Right tooltip" position="right">
      <button style={{ padding: "8px 16px" }}>Right</button>
    </Tooltip>
  </div>
);
