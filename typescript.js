'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
      }
    }
  ],
  ignorePatterns: ['dist/']
};
