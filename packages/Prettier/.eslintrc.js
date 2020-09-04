'use strict';
const prettier = require('./.prettierrc.js');

console.log(prettier);

module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettier],
  },
};
