import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import DatePicker from "./DatePicker.component";
import { DatePickerProps } from "./DatePicker.types";

export default {
  title: "DatePicker",
  component: DatePicker,
  argTypes: {
    variant: {
      options: ["default", "outline", "filled"],
      control: { type: "select" },
    },
    disabled: {
      options: [true, false],
      control: { type: "select" },
    },
    error: {
      options: [true, false],
      control: { type: "select" },
    },
  },
} as Meta<DatePickerProps>;

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;

export const DatePickerComponent = Template.bind({});
DatePickerComponent.args = {
  label: "Select Date",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Birth Date",
  error: true,
  helperText: "Date is required",
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Appointment Date",
  variant: "filled",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled DatePicker",
  disabled: true,
  value: "2025-12-16",
};

export const WithMinMax = Template.bind({});
WithMinMax.args = {
  label: "Select Date (Limited Range)",
  min: "2025-01-01",
  max: "2025-12-31",
  helperText: "Select a date in 2025",
};
