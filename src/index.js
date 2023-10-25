module.exports = {
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [ 'ava', 'import', 'react', 'react-hooks', 'unicorn' ],
	extends: [ 'plugin:ava/recommended' ],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		mocha: true,
		node: true,
	},
	rules: {
		...require('./rules/eslint'),
		...require('./rules/import'),
		...require('./rules/react'),
		...require('./rules/reactHooks'),
		...require('./rules/unicorn'),
	},
}