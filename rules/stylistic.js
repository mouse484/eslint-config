module.exports = {
  rules: {
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/array-element-newline
    'array-bracket-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
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
      },
    ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // https://eslint.org/docs/rules/comma-style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // ファイルの最後は改行する
    'eol-last': ['error', 'always'],

    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // 関数に名前をつける
    'func-names': 'warn',

    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'expression'],

    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // 識別子(id)の長さ
    'id-length': ['error', { min: 2 }],

    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      },
    ],

    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'off',

    // オブジェクトのキーと値の間　{ "foo": 42 }
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // 改行をunix(lf,\n)にする
    'linebreak-style': ['error', 'unix'],

    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // 最大ネスト数4
    'max-depth': ['error', 4],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',

    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'error',

    // https://eslint.org/docs/rules/max-params
    'max-params': ['error', 3],

    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',

    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',

    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['error', 'always-multiline'],

    // https://eslint.org/docs/rules/new-cap
    'new-cap': 'error',

    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'error',

    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',
  },
};
