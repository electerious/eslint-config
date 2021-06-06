module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'ava',
		'import',
		'react',
		'react-hooks',
		'unicorn',
	],
	extends: [
		'plugin:ava/recommended',
	],
	env: {
		browser: true,
		node: true,
		commonjs: true,
		mocha: true,
		es6: true,
	},
	rules: {
		...require('./rules/eslint'),
		...require('./rules/import'),
		...require('./rules/react'),
		...require('./rules/reactHooks'),
		...require('./rules/unicorn'),
	},
}