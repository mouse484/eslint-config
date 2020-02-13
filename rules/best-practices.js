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

    // ファイル内の最大クラス数
    'max-classes-per-file': ['error', 2],

    // アラートの使用を許可しない (alert/confirm/prompt)
    'no-alert': 'warn',

    // arguments.callerまたはarguments.calleeの利用を禁止
    'no-caller': 'error',

    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'error',

    // constructorで値を返さない
    'no-constructor-return': 'off',

    // 正規表現内の演算子を明確にする
    'no-div-regex': 'error',

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // 空の関数を許可しない
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',
  }
}