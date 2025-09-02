# ESLint configuration

![Build](https://github.com/electerious/eslint-config/workflows/Build/badge.svg)

Shareable ESLint configuration for my personal projects.

## Install

Install this package and `eslint`. Necessary plugins are already included.

```bash
npm install --save-dev eslint @electerious/eslint-config
```

## Usage

### Default

Create a file named `eslint.config.js` with following contents in the root folder of your project:

```js
export { default } from '@electerious/eslint-config'
```

That's it! You can override the settings by editing the `eslint.config.js` file.

### React

If you're using React, create a file named `eslint.config.js` with following contents in the root folder of your project:

```js
export { default } from '@electerious/eslint-config/react'
```
