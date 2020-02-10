module.exports = {
  rules: {
    // セッターとゲッターのペアーを強制する
    'accessor-pairs': 'off',

    // 配列のメソッドのコールバックでreturnを強制します (map,some..)
    'array-callback-return': ['error', { allowImplicit: true }],

    // varをブロックスコープとして扱う
    'block-scoped-var': 'error',

    // thisの無いClassメゾットを禁止
    'class-methods-use-this': 'error',

    // 循環的複雑度を制限する（11まで)
    complexity: ['error', 11],

    // 一貫性のある戻り値 (retrun)
    'consistent-return': 'error',

    // すべての制御文の中括弧
    curly: ['error', 'multi-line'],

    // Switch文のデフォルトケースを要求する
    'default-case': ['error', { commentPattern: '^no default$' }],

    // デフォルト パラメーターを最後に付ける
    'default-param-last': 'error',

    // ドットをプロパティの前に付ける
    'dot-location': ['error', 'property'],

    // できる限りドット表記でプロパティにアクセスする
    'dot-notation': ['error', { allowKeywords: true }],

    // ===を強制 (null以外)
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // グループ化されたアクセサペアが必須 (get,set)
    'grouped-accessor-pairs': 'error',

    // for-in内でifが必要
    'guard-for-in': 'error',
  }
}