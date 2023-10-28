module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['ava', 'import', 'react', 'react-hooks', 'unicorn'],
  extends: ['eslint:recommended', 'plugin:ava/recommended'],
  env: {
    browser: true,
    commonjs: true,
    mocha: true,
    node: true,
    es2024: true,
  },
  rules: {
    ...require('./rules/eslint.js'),
    ...require('./rules/import.js'),
    ...require('./rules/react.js'),
    ...require('./rules/reactHooks.js'),
    ...require('./rules/unicorn.js'),
  },
}
