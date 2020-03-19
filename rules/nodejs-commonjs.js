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
  }
}