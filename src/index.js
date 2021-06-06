module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'react',
		'react-hooks',
		'import',
		'unicorn',
		'ava'
	],
	extends: [
		'plugin:ava/recommended'
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
		...require('./rules/react'),
		...require('./rules/reactHooks'),
		...require('./rules/import'),
		...require('./rules/unicorn')
	},
}