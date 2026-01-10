import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Dropdown from "./Dropdown.component";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Dropdown",
  component: Dropdown,
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
} as Meta<DropdownProps>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

const sampleOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
  { value: "5", label: "Disabled Option", disabled: true }
];

export const DropdownComponent = Template.bind({});
DropdownComponent.args = {
  label: "Select an option",
  options: sampleOptions,
  placeholder: "Choose...",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Country",
  options: [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
  ],
  error: true,
  helperText: "Please select a country",
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Category",
  variant: "filled",
  options: [
    { value: "tech", label: "Technology" },
    { value: "design", label: "Design" },
    { value: "business", label: "Business" },
    { value: "marketing", label: "Marketing" },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: "Select Action",
  options: [
    { value: "edit", label: "Edit", icon: "✏️" },
    { value: "delete", label: "Delete", icon: "🗑️" },
    { value: "share", label: "Share", icon: "📤" },
    { value: "download", label: "Download", icon: "⬇️" },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Dropdown",
  disabled: true,
  options: sampleOptions,
  value: "1",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Full Width Dropdown",
  fullWidth: true,
  options: sampleOptions,
};

export const Controlled = () => {
  const [value, setValue] = React.useState("2");

  return (
    <div>
      <Dropdown
        label="Controlled Dropdown"
        options={sampleOptions}
        value={value}
        onChange={setValue}
      />
      <p style={{ marginTop: "16px" }}>Selected value: {value}</p>
    </div>
  );
};

export const Searchable = Template.bind({});
Searchable.args = {
  label: "Searchable Dropdown",
  searchable: true,
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
    { value: "fig", label: "Fig" },
    { value: "grape", label: "Grape" },
    { value: "honeydew", label: "Honeydew" },
  ],
};

export const SearchableWithIcons = Template.bind({});
SearchableWithIcons.args = {
  label: "Search Countries",
  searchable: true,
  searchPlaceholder: "Type to search countries...",
  options: [
    { value: "us", label: "United States", icon: "🇺🇸" },
    { value: "uk", label: "United Kingdom", icon: "🇬🇧" },
    { value: "ca", label: "Canada", icon: "🇨🇦" },
    { value: "au", label: "Australia", icon: "🇦🇺" },
    { value: "de", label: "Germany", icon: "🇩🇪" },
    { value: "fr", label: "France", icon: "🇫🇷" },
    { value: "jp", label: "Japan", icon: "🇯🇵" },
    { value: "cn", label: "China", icon: "🇨🇳" },
  ],
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  label: "Select Multiple Options",
  multiple: true,
  options: sampleOptions.slice(0, 4),
  placeholder: "Choose multiple...",
};

export const MultipleWithSearch = Template.bind({});
MultipleWithSearch.args = {
  label: "Select Multiple Fruits",
  multiple: true,
  searchable: true,
  searchPlaceholder: "Search fruits...",
  options: [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
    { value: "fig", label: "Fig" },
    { value: "grape", label: "Grape" },
    { value: "honeydew", label: "Honeydew" },
  ],
};

export const MultipleControlled = () => {
  const [values, setValues] = React.useState<string[]>(["1", "3"]);

  return (
    <div>
      <Dropdown
        label="Controlled Multiple Dropdown"
        multiple
        options={sampleOptions.slice(0, 4)}
        value={values}
        onChange={(value) => setValues(value as string[])}
      />
      <p style={{ marginTop: "16px" }}>Selected values: {values.join(", ")}</p>
    </div>
  );
};
