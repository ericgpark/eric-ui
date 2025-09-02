# eric-ui

A **React + TypeScript** component library built for scalability, maintainability, and great developer experience.  
Includes **Storybook** for documentation and **Jest** + **Testing Library** for testing.

---

## Features

- ⚛️ **React + TypeScript**: Strongly typed, modern React components.
- 📚 **Storybook**: Interactive component documentation with live examples.
- ✅ **Tested**: Jest + React Testing Library for unit and accessibility tests.
- 📦 **Tree-shakable**: Optimized builds for minimal bundle size.
- 🎨 **Customizable**: Easily themed with CSS variables or custom styles.

---

## Installation

Install `eric-ui` as a dependency in your React project:

```bash
npm install eric-ui
```
or
```bash
yarn add eric-ui
```

Ensure you also have React and ReactDOM installed (peer dependencies):

```bash
npm install react react-dom
```

### Usage
- Import components directly:

```typescript
import { Button } from 'eric-ui';

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

Launch Storybook for component exploration
```bash
npm run storybook
```
Run unit tests with Jest + React Testing Library
```bash
npm test
```
Build the library for npm publishing
```bash
npm run build
```
Build static Storybook docs
```bash
npm run build-storybook
```

Available props and variants are documented in Storybook.

Apps must load their own fonts. For example, in a React app:
```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```
or for self-hosted fonts:
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

You can wrap your app in a custom style provider, or use the one provided

```tsx
import { EricUIProvider } from 'eric-ui';

export default function App() {
  return (
    <EricUIProvider>
      <YourApp />
    </EricUIProvider>
  );
}
```

---

## 📖 Documentation

Run Storybook locally (for contributors) or view the hosted docs if published:

```bash
npm run storybook
```

Storybook provides:

- Component playgrounds with props controls
- Usage guidelines and design references
- Accessibility notes and test cases

---

## 🛠️ Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/eric-ui.git
cd eric-ui
npm install
```

### Available scripts

- `npm run dev` – Run Vite dev server for rapid feedback
- `npm run storybook` – Launch Storybook for component exploration
- `npm test` – Run unit tests with Jest + React Testing Library
- `npm run build` – Build the library for npm publishing
- `npm run build-storybook` – Build static Storybook docs

---

## 🧪 Testing

Components are tested with Jest and React Testing Library:

```bash
npm test
```

Tests ensure:

- Proper rendering and behavior
- Accessibility (a11y) compliance
- No visual regressions (if integrated with Chromatic)

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repo and create a new branch
2. Add stories in `*.stories.tsx` for each new component
3. Add tests in `*.test.tsx` to ensure reliability
4. Submit a pull request
5. Make sure all checks (linting, tests, build) pass before merging

---

## 🗺️ Roadmap

- Add theming support (light/dark)
- Publish Storybook docs online
- Add CI/CD for automated testing & publishing
- Add plop generators for scaffolding components

---

## 📄 License

MIT © 2025 Eric Park