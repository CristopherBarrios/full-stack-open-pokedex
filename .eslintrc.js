/* eslint-env node */
module.exports = {
  parser: 'babel-eslint',
  'env': {
    'node': true,
    'browser': true,
    'es2021': true,
  },
  'extends': ['eslint:recommended',
  'plugin:react/recommended',],
  'parserOptions': {
    ecmaFeatures: {
      jsx: true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  plugins: [
    'react',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-console': 'off',
    'indent': ['error', 2],
    'no-undef': 'error',
    'no-unused-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}