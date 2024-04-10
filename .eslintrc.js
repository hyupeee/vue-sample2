module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    paser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': ['error', 'always',],
    'semi': ['error', 'always',],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true}],
    'indent': ['error', 'tab', { 'SwitchCase': 1, }, ],
    'comma-dangle': ['error', {
      'arrays': 'always',
      'objects': 'always',
    },
    ],
    
  }
}
