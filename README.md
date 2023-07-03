# R3Dev Brand

<p align="center">
  <a href="https://www.upwork.com/o/companies/~01e5f1563365e3c1b5/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/badge-light.svg">
      <img src="./public/badge-dark.svg" />
    </picture>
  </a>

  <a href="https://www.npmjs.com/package/@r3-dev/brand">
    <img alt="npm" src="https://img.shields.io/npm/v/@r3-dev/brand">
  </a>

  <a href="https://github.com/r3-dev/brand/actions">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/r3-dev/brand/gh-pages.yaml?branch=master">
  </a>
</p>

## Install

```
npm install @r3-dev/brand
```

```
yarn add @r3-dev/brand
```

```
pnpm add @r3-dev/brand
```

## Usage

[![Edit @r3-dev/brand](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r3-dev-brand-z6f766?fontsize=14&hidenavigation=1&theme=dark)

```tsx
import '@r3-dev/brand'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'r3-badge': React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >;
    }
  }
}

export function App() {
  return (
    <r3-badge
      href="https://example.com"
      style={{ position: 'fixed', top: '1rem', right: '1rem' }}
    />
  )
}
```

## Overriding styles

```css
r3-badge {
  /* default colors */
  /* --bg-badge: #000; */
  --text-badge: #fff;
  --bg-logo: #00a621;
  --text-logo: #fff;

  /* override */
  --bg-badge: darkblue;
}

/* dark mode */
@media (prefers-color-scheme: dark) {
  r3-badge {
    --bg-badge: #fff;
    --text-badge: #000;
  }
}

/* light mode */
@media (prefers-color-scheme: light) {
  r3-badge {
    --bg-badge: #000;
    --text-badge: #fff;
  }
}

```