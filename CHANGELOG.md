# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Linting for `Array.from(fill)` instead of `Array.from(…, mapFunction)` (`unicorn/no-array-from-fill`)
- Linting to prefer `split()` with a limit argument (`unicorn/prefer-split-limit`)
- Linting to prefer HTTPS over HTTP in URLs (`unicorn/prefer-https`)
- Linting for well-formed comment content such as casing in acronyms (`unicorn/comment-content`)
- Linting for consistent class member ordering (`unicorn/consistent-class-member-order`)
- Linting for unnecessary template literal expressions (`unicorn/no-useless-template-literals`)
- Linting to prefer `Array.from(…, mapFunction)` over `.map()` (`unicorn/prefer-array-from-map`)
- Linting to prefer `else if` over adjacent unrelated `if` (`unicorn/prefer-else-if`)
- Linting to simplify unnecessary ternary expressions (`unicorn/prefer-minimal-ternary`)
- Linting to prefer `Number()` over `Number.parseFloat()` (`unicorn/prefer-number-coercion`)
- Linting to prefer arrow function properties over methods with a single return (`unicorn/prefer-short-arrow-method`)
- Linting to prefer unary minus over multiplying by -1 (`unicorn/prefer-unary-minus`)
- Linting for unnecessary boolean comparisons (`unicorn/no-unnecessary-boolean-comparison`)
- And more rules from `eslint-plugin-unicorn` that are now active

### Changed

- `eslint` from ^9.39.4 to ^10.6.0
- `eslint-plugin-unicorn` from ^64.0.0 to ^70.0.0 (adds ~140 rules, 13 now active)

### Removed

- `eslint-plugin-react` — incompatible with ESLint 10; `@electerious/eslint-config/react` no longer includes React rules

## [5.4.0] - 2026-05-08

### Added

- More prevented abbreviations

### Changed

- Updated dependencies (that contain new rules)

## [5.3.0] - 2026-04-26

### Changed

- Ignore `.agents` folder
- Disabled `unicorn/no-process-exit` rule
- Updated dependencies

## [5.2.2] - 2026-02-14

### Changed

- Updated dependencies

## [5.2.1] - 2025-09-30

### Changed

- Updated dependencies to their latest versions

## [5.2.0] - 2025-09-05

### Added

- `eslint-plugin-react` for React linting when using `@electerious/eslint-config/react`

## [5.1.0] - 2025-08-21

### Changed

- `eslint-plugin-import` to `eslint-plugin-import-x` for an improved import linting with less dependencies

## [5.0.2] - 2025-08-17

### Fixed

- Named default exports shouldn't be required

## [5.0.1] - 2025-08-16

### Fixed

- JSDoc comments shouldn't be required

## [5.0.0] - 2025-08-16

### Changed

- Updated dependencies and plugins
- Require Node.js 22

## [4.1.0] - 2023-10-28

### Changed

- Support es2024 environments

### Removed

- React rules that effect the style of the code (use Prettier instead)

## [4.0.0] - 2023-10-25

### Changed

- Several rules
- Require Node.js 18

### Removed

- Rules that effect the style of the code (use Prettier instead)

## [3.5.0] - 2022-09-04

### Added

- `unicorn/prefer-logical-operator-over-ternary` rule

### Changed

- Updated dependencies

## [3.4.0] - 2022-08-26

### Changed

- Use ECMAScript 2022 parser

## [3.3.0] - 2022-08-16

### Added

- Avoid `req` and `res` abbreviations

## [3.2.0] - 2022-04-30

### Added

- `unicorn/no-useless-switch-case` rule
- `unicorn/prefer-modern-math-apis` rule

## [3.1.0] - 2022-01-09

### Added

- `unicorn/no-invalid-remove-event-listener` rule
- `unicorn/no-useless-fallback-in-spread` rule

### Changed

- Updated dependencies

## [3.0.0] - 2021-09-18

### Changed

- Dependencies are now part of the package. No need to install peer dependencies anymore. This makes it easier for me to maintain my projects.

## [2.0.5] - 2021-08-17

### Changed

- Updated dependencies

## [2.0.4] - 2021-08-17

### Changed

- Updated dependencies

## [2.0.3] - 2021-06-19

### Changed

- Remove problematic `numeric-separators-style`

## [2.0.2] - 2021-06-06

### Changed

- Remove problematic `prefer-prototype-methods`

## [2.0.1] - 2021-06-06

### Changed

- Use `always-multiline` for `comma-dangle`

### Fixed

- Added missing plugin to list of plugins in README

## [2.0.0] - 2021-06-06

### Added

- New rules and dependencies

## [1.4.0] - 2021-01-14

### Added

- `no-unsafe-optional-chaining` rule

### Changed

- `ecmaVersion` to `2021`

## [1.3.5] - 2021-01-02

### Changed

- Specify curly-spacing for children

## [1.3.4] - 2020-05-10

### Fixed

- Incorrect `if-else-if` rule

## [1.3.3] - 2020-05-10

### Added

- `no-constructor-return` rule
- `grouped-accessor-pairs` rule
- `if-else-if` rule
- `default-case-last` rule

## [1.3.2] - 2020-04-10

### Added

- `eol-last` rule
- `no-dupe-else-if` rule
- `react/jsx-no-target-blank` rule

## [1.3.1] - 2019-10-17

### Changed

- Adjust `eslint-plugin-react-native` rules

## [1.3.0] - 2019-10-17

### Added

- `eslint-plugin-react-native`

### Fixed

- Function argument indention

## [1.2.1] - 2019-10-17

### Fixed

- Missing import of plugin `eslint-plugin-import`

## [1.2.0] - 2019-10-17

### Added

- `eslint-plugin-import`

## [1.1.2] - 2019-10-16

### Changed

- `indent` for function arguments

## [1.1.1] - 2019-10-16

### Fixed

- Missing dep in README

## [1.1.0] - 2019-10-15

### Added

- `eslint-plugin-react-hooks`

## [1.0.0] - 2019-10-14

### Added

- Everything
