# eslint-config-software-improvement-group

ESLint configuration for Software Improvement Group's (SIG) 10 guidelines for building maintainable software.

## Getting started

### Installing

install with yarn

```
yarn add eslint-config-software-improvement-group -D
```

or install with npm

```
npm i eslint-config-software-improvement-group -D
```

### Usage

To error on maintainability guidelines, extend `software-improvement-group`. Recommended for new code.

```json
{
  "extends": ["software-improvement-group"]
}
```

To warn on maintainability guidelines, extend `software-improvement-group/loose`. Recommended for legacy code.

```json
{
  "extends": ["software-improvement-group/loose"]
}
```
