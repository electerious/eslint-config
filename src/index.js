module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
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
    es6: true,
    mocha: true,
    node: true,
  },
  rules: {
    ...require('./rules/eslint.js'),
    ...require('./rules/import.js'),
    ...require('./rules/react.js'),
    ...require('./rules/reactHooks.js'),
    ...require('./rules/unicorn.js'),
  },
}
