import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import unicornPlugin from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  globalIgnores(['**/dist/*', '**/coverage/*', '**/node_modules/*']),
  js.configs.recommended,
  jsdocPlugin.configs['flat/recommended'],
  unicornPlugin.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module',
      globals: globals.nodeBuiltin,
    },
    rules: {
      'camelcase': [
        2,
        {
          properties: 'never',
        },
      ],
      'capitalized-comments': [
        2,
        'always',
        {
          ignoreConsecutiveComments: true,
        },
      ],
      'default-case-last': 2,
      'default-case': 2,
      'eqeqeq': [
        2,
        'always',
        {
          null: 'ignore',
        },
      ],
      'func-style': 2,
      'grouped-accessor-pairs': [2, 'getBeforeSet'],
      'new-cap': [
        2,
        {
          properties: false,
        },
      ],
      'no-array-constructor': 2,
      'no-caller': 2,
      'no-constructor-return': 2,
      'no-useless-assignment': 2,
      'no-eval': 2,
      'no-extend-native': 2,
      'no-implicit-coercion': 2,
      'no-implied-eval': 2,
      'no-labels': 2,
      'no-lone-blocks': 2,
      'no-lonely-if': 2,
      'no-multi-str': 2,
      'no-nested-ternary': 2,
      'no-object-constructor': 2,
      'no-new-wrappers': 2,
      'no-proto': 2,
      'no-return-await': 2,
      'no-script-url': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-undef-init': 2,
      'no-unneeded-ternary': 2,
      'no-useless-call': 2,
      'no-var': 2,
      'no-void': 2,
      'no-restricted-imports': [
        2,
        {
          name: 'node:assert',
          message: "Please use 'node:assert/strict' instead.",
        },
      ],
      'no-restricted-properties': [
        2,
        {
          object: 'assert',
          property: 'strictEqual',
          message:
            "Use 'assert.equal' instead as this method shorter and an alias to the strict method when using the strict assert module as enforced by another rule.",
        },
        {
          object: 'assert',
          property: 'notStrictEqual',
          message:
            "Use 'assert.notEqual' instead as this method shorter and an alias to the strict method when using the strict assert module as enforced by another rule.",
        },
        {
          object: 'assert',
          property: 'deepStrictEqual',
          message:
            "Use 'assert.deepEqual' instead as this method shorter and an alias to the strict method when using the strict assert module as enforced by another rule.",
        },
        {
          object: 'assert',
          property: 'notDeepStrictEqual',
          message:
            "Use 'assert.notDeepEqual' instead as this method shorter and an alias to the strict method when using the strict assert module as enforced by another rule.",
        },
      ],
      'one-var': [2, 'never'],
      'prefer-const': 2,
      'require-await': 2,
      'object-shorthand': [2, 'always'],
    },
  },
  {
    rules: {
      'unicorn/prefer-import-meta-properties': 2,
      'unicorn/consistent-destructuring': 2,
      'unicorn/no-unused-properties': 2,
      'unicorn/numeric-separators-style': [
        2,
        {
          onlyIfContainsSeparator: true,
        },
      ],
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
      'unicorn/no-array-callback-reference': 0,
      'unicorn/no-array-reduce': 0,
      'unicorn/no-null': 0,
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-anonymous-default-export': 0,
      'import/default': 2,
      'import/export': 2,
      'import/extensions': [2, 'ignorePackages'],
      'import/named': 2,
      'import/namespace': 2,
      'import/newline-after-import': 2,
      'import/no-absolute-path': 2,
      'import/no-amd': 2,
      'import/no-commonjs': 2,
      'import/no-cycle': 1,
      'import/no-duplicates': 1,
      'import/no-dynamic-require': 2,
      'import/no-extraneous-dependencies': 2,
      'import/no-mutable-exports': 2,
      'import/no-named-as-default-member': 1,
      'import/no-named-as-default': 1,
      'import/no-named-default': 2,
      'import/no-relative-packages': 2,
      'import/no-self-import': 2,
      'import/no-unused-modules': 2,
      'import/no-useless-path-segments': 2,
      'import/no-webpack-loader-syntax': 2,
    },
  },
  {
    rules: {
      'jsdoc/require-jsdoc': 0,
      'jsdoc/tag-lines': [2, 'any', { startLines: 1 }],
    },
  },
])
