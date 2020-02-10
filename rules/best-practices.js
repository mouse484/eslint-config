module.exports = {
  rules: {
    // セッターとゲッターのペアーを強制する
    'accessor-pairs': 'off',

    // 配列のメソッドのコールバックでreturnを強制します (map,some..)
    'array-callback-return': ['error', { allowImplicit: true }],

    // varをブロックスコープとして扱う
    'block-scoped-var': 'error',
  }
}