'use strict';
const prettier = require("./.prettierrc.js")

module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettier]
  },
};
