# React UI Components

A personal React component library built with TypeScript and styled-components.

## 📦 Installation

\`\`\`bash
npm install react-ui-components
# or
yarn add react-ui-components
# or
pnpm add react-ui-components
\`\`\`

## 🚀 Usage

\`\`\`tsx
import { Button, Card, Input } from 'react-ui-components';

function App() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
\`\`\`

## 📚 Components

This library includes the following components:

- **Button** - Versatile button component with multiple variants and sizes
- **Card** - Container component for grouping content
- **DatePicker** - Date selection component
- **Dropdown** - Dropdown menu component
- **Input** - Text input component
- **Modal** - Modal dialog component
- **Spinner** - Loading spinner component
- **Table** - Data table component
- **Tabs** - Tabbed interface component
- **Text** - Typography component
- **Tooltip** - Tooltip component

## 🛠️ Development

### Available Scripts

#### \`pnpm storybook\`

Launches Storybook on [http://localhost:6006](http://localhost:6006) for component development and documentation.

#### \`pnpm test\`

Runs the Jest test suite in watch mode.

#### \`pnpm rollup\`

Builds the library for production using Rollup. Output is generated in the \`dist\` folder with both CommonJS and ES Module formats.

#### \`pnpm build-storybook\`

Builds a static version of Storybook for deployment to the \`docs-build\` folder.

#### \`pnpm generate-svg\`

Generates React components from SVG files using SVGR.

## 🏗️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Rollup** - Module bundler
- **Jest** - Testing framework
- **Storybook** - Component documentation and development
- **SVGR** - SVG to React component converter

## 📝 License

ISC

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.