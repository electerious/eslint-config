module.exports = {
  'unicorn/consistent-destructuring': 2,
  'unicorn/error-message': 2,
  'unicorn/filename-case': [
    2,
    {
      cases: {
        camelCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/new-for-builtins': 2,
  'unicorn/no-unused-properties': 2,
  'unicorn/no-useless-switch-case': 2,
  'unicorn/no-useless-undefined': 2,
  'unicorn/numeric-separators-style': [
    2,
    {
      onlyIfContainsSeparator: true,
    },
  ],
  'unicorn/prefer-array-find': 2,
  'unicorn/prefer-array-flat': 2,
  'unicorn/prefer-array-some': 2,
  'unicorn/prefer-at': 2,
  'unicorn/prefer-date-now': 2,
  'unicorn/prefer-default-parameters': 2,
  'unicorn/prefer-includes': 2,
  'unicorn/prefer-modern-math-apis': 2,
  'unicorn/prefer-node-protocol': 2,
  'unicorn/prefer-set-size': 2,
  'unicorn/prefer-spread': 2,
  'unicorn/prefer-switch': 2,
  'unicorn/prevent-abbreviations': [
    2,
    {
      extendDefaultReplacements: false,
      replacements: {
        conf: {
          config: true,
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
        i: {
          index: true,
        },
        opt: {
          option: true,
        },
        opts: {
          options: true,
        },
        param: {
          parameter: true,
        },
        params: {
          parameters: true,
        },
        val: {
          value: true,
        },
      },
    },
  ],
}
