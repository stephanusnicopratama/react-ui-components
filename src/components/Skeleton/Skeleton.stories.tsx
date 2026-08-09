import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Skeleton from "./Skeleton.component";
import { SkeletonProps } from "./Skeleton.types";
import Card, { CardTitle } from "../Card/Card.component";

export default {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {
    variant: {
      options: ["text", "circle", "rect"],
      control: { type: "select" },
    },
    count: { control: { type: "number" } },
  },
} as Meta<SkeletonProps>;

const Template: StoryFn<SkeletonProps> = (args) => <Skeleton {...args} />;

export const SkeletonComponent = Template.bind({});
SkeletonComponent.args = {
  variant: "text",
  width: 200,
};

export const TextLines = Template.bind({});
TextLines.args = {
  variant: "text",
  count: 3,
  width: "100%",
};

export const Circle = Template.bind({});
Circle.args = {
  variant: "circle",
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  variant: "rect",
  width: 300,
  height: 120,
};

export const ArticleCard = () => (
  <Card type="elevated">
    <CardTitle>
      <Skeleton variant="text" width={120} />
    </CardTitle>
    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
      <Skeleton variant="circle" />
      <Skeleton variant="text" width={150} />
    </div>
    <Skeleton variant="text" count={3} width="100%" />
    <Skeleton variant="rect" width="100%" height={120} />
  </Card>
);
