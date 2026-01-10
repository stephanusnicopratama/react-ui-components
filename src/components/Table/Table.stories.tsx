import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Table from "./Table.component";
import { TableProps } from "./Table.types";

export default {
  title: "Table",
  component: Table,
  argTypes: {
    striped: {
      options: [true, false],
      control: { type: "select" },
    },
    bordered: {
      options: [true, false],
      control: { type: "select" },
    },
    hoverable: {
      options: [true, false],
      control: { type: "select" },
    },
  },
} as Meta<TableProps>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

const sampleColumns = [
  { key: "id", header: "ID", width: "80px" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role" },
  { key: "status", header: "Status", align: "center" as const },
];

const sampleData = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Editor",
    status: "Active",
  },
];

export const TableComponent = Template.bind({});
TableComponent.args = {
  columns: sampleColumns,
  data: sampleData,
  fullWidth: true,
};

export const Striped = Template.bind({});
Striped.args = {
  columns: sampleColumns,
  data: sampleData,
  striped: true,
  fullWidth: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  columns: sampleColumns,
  data: sampleData,
  bordered: true,
  fullWidth: true,
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  columns: sampleColumns,
  data: sampleData,
  hoverable: true,
  fullWidth: true,
};

export const AllFeatures = Template.bind({});
AllFeatures.args = {
  columns: sampleColumns,
  data: sampleData,
  striped: true,
  bordered: true,
  hoverable: true,
  fullWidth: true,
};
