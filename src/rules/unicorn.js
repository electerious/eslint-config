module.exports = {
	'unicorn/no-useless-undefined': 2,
	'unicorn/no-unused-properties': 2,
	'unicorn/consistent-destructuring': 2,
	'unicorn/error-message': 2,
	'unicorn/new-for-builtins': 2,
	'unicorn/prefer-spread': 2,
	'unicorn/prefer-includes': 2,
	'unicorn/prefer-date-now': 2,
	'unicorn/prefer-array-flat': 2,
	'unicorn/prefer-default-parameters': 2,
	'unicorn/prefer-switch': 2,
	'unicorn/require-array-join-separator': 2,
	'unicorn/require-number-to-fixed-digits-argument': 2,
	'unicorn/prefer-object-has-own': 2,
	'unicorn/filename-case': [ 2, {
		cases: {
			camelCase: true,
			pascalCase: true,
		},
	}],
	'unicorn/prevent-abbreviations': [ 2, {
		extendDefaultReplacements: false,
		replacements: {
			conf: {
				config: true,
			},
			i: {
				index: true,
			},
			err: {
				error: true,
			},
			ev: {
				event: true,
			},
			evt: {
				event: true,
			},
			opt: {
				option: true,
			},
			opts: {
				options: true,
			},
			val: {
				value: true,
			},
		},
	}],
}