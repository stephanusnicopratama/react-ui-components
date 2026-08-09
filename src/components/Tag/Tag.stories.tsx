import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Tag from "./Tag.component";
import { TagProps } from "./Tag.types";
import Card, { CardTitle, CardBody } from "../Card/Card.component";

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    status: {
      options: ["success", "failed", "pending"],
      control: { type: "select" },
    },
  },
} as Meta<TagProps>;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const TagComponent = Template.bind({});
TagComponent.args = {
  status: "pending",
  children: "Pending",
};

export const Success = Template.bind({});
Success.args = {
  status: "success",
  children: "Success",
};

export const Failed = Template.bind({});
Failed.args = {
  status: "failed",
  children: "Failed",
};

export const Pending = Template.bind({});
Pending.args = {
  status: "pending",
  children: "Pending",
};

export const InsideCard = () => (
  <Card type="elevated">
    <CardTitle>
      Deployment
      <Tag status="success">Succeeded</Tag>
    </CardTitle>
    <CardBody>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Tag status="failed">Build failed</Tag>
        <Tag status="pending">Waiting</Tag>
      </div>
    </CardBody>
  </Card>
);
