module.exports = {
  rules: {
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],

    // https://eslint.org/docs/rules/array-element-newline
    'array-bracket-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
  }
}