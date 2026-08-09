import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import Toast from "./Toast.component";
import { ToastProps } from "./Toast.types";
import Button from "../Button/Button.component";

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    type: {
      options: ["success", "error", "info", "warning"],
      control: { type: "select" },
    },
    position: {
      options: [
        "top-right",
        "top-left",
        "top-center",
        "bottom-right",
        "bottom-left",
        "bottom-center",
      ],
      control: { type: "select" },
    },
    duration: { control: { type: "number" } },
  },
} as Meta<ToastProps>;

const Template: StoryFn<ToastProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        key={String(open)}
      />
    </>
  );
};

export const ToastComponent = Template.bind({});
ToastComponent.args = {
  type: "info",
  title: "Info",
  description: "This is an informational message.",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  title: "Success",
  description: "Your changes have been saved.",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  title: "Error",
  description: "Something went wrong. Please try again.",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  title: "Warning",
  description: "Your session is about to expire.",
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  type: "success",
  title: "Saved",
  description: "Document saved to the cloud.",
  position: "bottom-left",
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  type: "warning",
  title: "Storage almost full",
  description:
    "You are using 95% of your storage quota. Upgrade your plan or delete unused files to free up space before new uploads start failing.",
};

export const NoAutoClose = Template.bind({});
NoAutoClose.args = {
  type: "info",
  title: "Persistent",
  description: "This toast stays until dismissed.",
  duration: 0,
};
