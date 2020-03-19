module.exports = {
  env: {
    node: true
  },

  rules: {
    // コールバック後にリターンを強制
    'callback-return': 'off',

    // requireをトップレベルで行う
    'global-require': 'error',

    // https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': ['off', false],

    // require関数でnew演算子の使用を禁止します
    'no-new-require': 'error',

    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // process.envの禁止
    'no-process-env': 'off',

    // process.exit()の禁止
    'no-process-exit': 'off',

    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',
  }
}