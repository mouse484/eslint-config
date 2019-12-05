'use strict';

module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      quoteProps: 'as-needed',
      trailingComma: 'es5',
      bracketSpacing: true,
      arrowParens: 'avoid',
      vueIndentScriptAndStyle: true,
      endOfLine: 'lf'
    }]
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['prettier/@typescript-eslint']
    }
  ]
};
