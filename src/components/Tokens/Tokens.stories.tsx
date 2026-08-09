import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";

export default {
  title: "Design Tokens/Colors",
} as Meta;

const TOKENS: { name: string; value: string; isText?: boolean }[] = [
  { name: "primary", value: "#0085ad" },
  { name: "primary-hover", value: "#0ed1ff" },
  { name: "primary-active", value: "#0085ad" },
  { name: "secondary", value: "#475569" },
  { name: "secondary-hover", value: "#334155" },
  { name: "secondary-active", value: "#1e293b" },
  { name: "accent", value: "#0ed1ff" },
  { name: "text-primary", value: "#333" },
  { name: "text-secondary", value: "#6b7280" },
  { name: "text-disabled", value: "#9ca3af", isText: true },
  { name: "text-color-brand", value: "#0085ad" },
  { name: "background-default", value: "#fff", isText: true },
  { name: "background-subtle", value: "#f9fafb", isText: true },
  { name: "background-disabled", value: "#f3f4f6", isText: true },
  { name: "background-active", value: "#e8ecf0", isText: true },
  { name: "background-inverse", value: "#1f2937" },
  { name: "border-default", value: "#d1d5db", isText: true },
  { name: "border-divider", value: "#e5e7eb", isText: true },
  { name: "border-hover", value: "#9ca3af" },
  { name: "success", value: "#22c55e" },
  { name: "warning", value: "#f59e0b" },
  { name: "error", value: "#ef4444" },
  { name: "info", value: "#3b82f6" },
  { name: "disabled", value: "#9d9d9d" },
  { name: "tooltip-bg", value: "#1f2937" },
];

const swatchStyle = (value: string, isText?: boolean): React.CSSProperties => ({
  width: 96,
  height: 56,
  borderRadius: 8,
  background: value,
  border: `1px solid ${isText ? "#d1d5db" : "rgba(0,0,0,0.1)"}`,
});

const Template: StoryFn = () => (
  <div style={{ display: "grid", gap: 12 }}>
    {TOKENS.map((token) => (
      <div key={token.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={swatchStyle(token.value, token.isText)} />
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>--{token.name}</div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>{token.value}</div>
        </div>
      </div>
    ))}
  </div>
);

export const ColorPalette = Template.bind({});
