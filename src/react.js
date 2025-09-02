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
