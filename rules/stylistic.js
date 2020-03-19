module.exports = {
  rules: {
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],
  }
}