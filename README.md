# ESLint configuration

Shareable ESLint configuration for my personal projects.

## Install

Install this package, ESLint and the necessary plugins.

```
npm install --save-dev @electerious/eslint-config eslint eslint-plugin-react
```

## Usage

Create a file named `.eslintrc.json` with following contents in the root folder of your project:

```json
{
  "extends": "@electerious/eslint-config"
}
```

That's it! You can override the settings by editing the `.eslintrc.json` file.