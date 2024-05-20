/* eslint-env node */
module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'es2021': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-console': 'off',
    'indent': ['error', 2],
    'no-undef': 'error',
    'no-unused-vars': 'error',
  },
}