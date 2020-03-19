module.exports = {
  env: {
    node: true
  },

  rules: {
    // コールバック後にリターンを強制
    'callback-return': 'off',

    // requireをトップレベルで行う
    'global-require': 'error',
  }
}