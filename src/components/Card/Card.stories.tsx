import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Card, { CardTitle, CardBody, CardFooter } from "./Card.component";
import { CardProps } from "./Card.types";
import Button from "../Button/Button.component";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    type: {
      options: ["nude", "elevated"],
      control: { type: "select" },
    },
  },
} as Meta<CardProps>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "Hello world!",
};

export const Elevated = Template.bind({});
Elevated.args = {
  type: "elevated",
  children: "This is an elevated card with shadow.",
};

export const Nude = Template.bind({});
Nude.args = {
  type: "nude",
  children: "This is a nude card with border only.",
};

export const WithTitleBodyFooter = Template.bind({});
WithTitleBodyFooter.args = {
  children: (
    <>
      <CardTitle>Card Title</CardTitle>
      <CardBody>
        This is the main body content of the card. It can hold any React node —
        text, images, forms, or other components.
      </CardBody>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </>
  ),
};

export const ProfileCard = Template.bind({});
ProfileCard.args = {
  children: (
    <>
      <CardTitle>
        <span>Jane Cooper</span>
        <span>@janecooper</span>
      </CardTitle>
      <CardBody>
        Product designer focused on accessible, delightful interfaces. Building
        design systems at scale.
      </CardBody>
      <CardFooter>
        <Button>Follow</Button>
      </CardFooter>
    </>
  ),
};

export const NudeWithFooter = Template.bind({});
NudeWithFooter.args = {
  type: "nude",
  children: (
    <>
      <CardTitle>Confirm action</CardTitle>
      <CardBody>
        This action cannot be undone. Are you sure you want to continue?
      </CardBody>
      <CardFooter>
        <Button>Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </>
  ),
};
