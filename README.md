# ESLint configuration

![Build](https://github.com/electerious/eslint-config/workflows/Build/badge.svg)

Shareable ESLint configuration for my personal projects.

## Install

Install this package. It already includes ESLint and the necessary plugins.

```
npm install --save-dev @electerious/eslint-config
```

## Usage

Create a file named `.eslintrc.json` with following contents in the root folder of your project:

```json
{
  "extends": "@electerious/eslint-config"
}
```

That's it! You can override the settings by editing the `.eslintrc.json` file.