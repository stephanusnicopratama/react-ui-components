import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Tabs from "./Tabs.component";
import { TabsProps } from "./Tabs.types";

export default {
  title: "Tabs",
  component: Tabs,
  argTypes: {
    variant: {
      options: ["default", "underline", "pills"],
      control: { type: "select" },
    },
    fullWidth: {
      options: [true, false],
      control: { type: "select" },
    },
  },
} as Meta<TabsProps>;

const Template: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

const sampleTabs = [
  {
    label: "Profile",
    content: (
      <div>
        <h3>Profile Content</h3>
        <p>This is the profile tab content.</p>
      </div>
    ),
  },
  {
    label: "Settings",
    content: (
      <div>
        <h3>Settings Content</h3>
        <p>Configure your settings here.</p>
      </div>
    ),
  },
  {
    label: "Messages",
    content: (
      <div>
        <h3>Messages Content</h3>
        <p>Your messages will appear here.</p>
      </div>
    ),
  },
  {
    label: "Disabled",
    content: <div>This content is disabled</div>,
    disabled: true,
  },
];

export const TabsComponent = Template.bind({});
TabsComponent.args = {
  tabs: sampleTabs,
};

export const Underline = Template.bind({});
Underline.args = {
  tabs: sampleTabs,
  variant: "underline",
};

export const Pills = Template.bind({});
Pills.args = {
  tabs: sampleTabs,
  variant: "pills",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  tabs: sampleTabs.slice(0, 3),
  fullWidth: true,
};

export const DefaultSecondTab = Template.bind({});
DefaultSecondTab.args = {
  tabs: sampleTabs,
  defaultActiveTab: 1,
};
