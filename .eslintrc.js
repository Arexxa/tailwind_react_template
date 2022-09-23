module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    quotes: ['error', 'single'],
    // we want to force semicolons
    semi: ['error', 'never'],
    // we use 4 spaces to indent our code
    indent: ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
    // No trailing spaces in code
    'no-trailing-spaces': ['error'],
    // Shouldn't use console.* -- use a proper logger instead, e.g.
    // https://www.npmjs.com/package/winston
    'no-console': ['warn'],
    'no-debugger': ['warn'],
    // Enforce using camelCase
    camelcase: ['error', { properties: 'always' }],
    '@typescript-eslint/explicit-function-return-type': 'warn'
  }
}
