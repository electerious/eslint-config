# Re-enable eslint-plugin-react

`eslint-plugin-react` was disabled because it only supports ESLint `^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7` and this project now uses ESLint 10.

Once `eslint-plugin-react` publishes a version compatible with ESLint 10:

1. Reinstall the plugin:

   ```
   npm install eslint-plugin-react@latest
   ```

2. Update `package.json` — add `eslint-plugin-react` to `dependencies`:

   ```json
   "eslint-plugin-react": "^X.Y.Z",
   ```

3. Restore `src/react.js` to its original content:

   ```js
   import reactPlugin from 'eslint-plugin-react'
   import { defineConfig } from 'eslint/config'
   import index from './index.js'

   export default defineConfig([
     ...index,
     reactPlugin.configs.flat.recommended,
     {
       settings: {
         react: {
           version: 'detect',
         },
       },
     },
   ])
   ```

4. Verify:
   ```
   npm test
   ```
