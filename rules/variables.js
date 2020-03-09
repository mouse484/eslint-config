const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // 定義時に変数の初期化を強制または禁止
    'init-declarations': 'off',

    // 変数の削除を禁止
    'no-delete-var': 'error',

    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // 特定のグローバルを許可しない
    'no-restricted-globals': confusingBrowserGlobals,

    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',
  }
};