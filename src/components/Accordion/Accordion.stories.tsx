import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Accordion from "./Accordion.component";
import { AccordionProps } from "./Accordion.types";
import Tag from "../Tag/Tag.component";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    allowMultiple: { control: { type: "boolean" } },
  },
} as Meta<AccordionProps>;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

const sampleItems = [
  {
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces, maintained by Meta. It lets you compose complex UIs from small, isolated pieces of code called components.",
  },
  {
    title: "Why use a component library?",
    content:
      "A component library provides consistent, reusable UI building blocks, speeding up development and keeping the design system coherent across your product.",
  },
  {
    title: "How do I install it?",
    content:
      "Install via npm: npm install react-ui-components. Then import the components you need in your React application.",
  },
];

export const AccordionComponent = Template.bind({});
AccordionComponent.args = {
  items: sampleItems,
};

export const DefaultOpenFirst = Template.bind({});
DefaultOpenFirst.args = {
  items: sampleItems,
  defaultOpenIndex: 0,
};

export const AllowMultiple = Template.bind({});
AllowMultiple.args = {
  items: sampleItems,
  allowMultiple: true,
  defaultOpenIndex: [0, 1],
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  items: [
    ...sampleItems,
    {
      title: "Disabled item",
      content: "This item cannot be opened.",
      disabled: true,
    },
  ],
};

export const StatusItems = Template.bind({});
StatusItems.args = {
  items: [
    {
      title: (
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Deployment <Tag status="success">Succeeded</Tag>
        </span>
      ),
      content: "The latest build deployed successfully to production.",
    },
    {
      title: (
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Tests <Tag status="failed">2 failed</Tag>
        </span>
      ),
      content: "Two unit tests are failing on the payment module.",
    },
    {
      title: (
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Migration <Tag status="pending">In progress</Tag>
        </span>
      ),
      content: "Database migration is currently running.",
    },
  ],
  defaultOpenIndex: 0,
};
