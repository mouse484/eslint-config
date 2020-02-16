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

    // ===でnullを比較する
    'no-eq-null': 'off',

    // eval()の利用を禁止
    'no-eval': 'error',

    // ネイティブ型の変更を禁止
    'no-extend-native': 'error',

    // 不要な関数のバインディングを禁止
    'no-extra-bind': 'error',

    // 不要なラベルの禁止
    'no-extra-label': 'error',

    // case文のフォールスルーを禁止
    'no-fallthrough': 'error',

    // Numberの前や後ろに小数点を使用する事の禁止
    'no-floating-decimal': 'error',

    // ネイティブオブジェクトまたは読み取り専用グローバル変数への割り当て禁止
    'no-global-assign': ['error', { exceptions: [] }],

    // 短い表記での型変換を禁止 (booleanを許可)
    'no-implicit-coercion': ['error', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // disallow var and named functions in global scope
    'no-implicit-globals': 'off',

    // eval()のような関数の利用を禁止
    'no-implied-eval': 'error',

    // クラス以外でのthisの禁止
    'no-invalid-this': 'error',

    // __iterator__ プロパティの禁止
    'no-iterator': 'error',

    // ラベルの禁止
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 不要なブロックを許可しない
    'no-lone-blocks': 'error',

    // ループ内での関数作成を禁止
    'no-loop-func': 'error',

    // マジックナンバーを禁止
    'no-magic-numbers': ['error', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // 重複スペースの禁止
    'no-multi-spaces': 'error',

    // 複数行に渡る文字列の禁止
    'no-multi-str': 'error',

    // 割り当てまたは比較の一部ではない場合、new演算子の使用を禁止
    'no-new': 'error',

    // (new) Function の利用を禁止
    'no-new-func': 'error',

    // プリミティブタイプの作成にnewを使わない
    'no-new-wrappers': 'error',

    // 8進数の禁止
    'no-octal': 'error',

    // 8進数エスケープを禁止
    'no-octal-escape': 'error',

    // 関数パラメーターの再割り当てを許可しない
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: []
    }],

    //  __proto__ プロパティの利用を禁止
    'no-proto': 'error',

    // 同じ変数を複数回宣言することを禁止
    'no-redeclare': 'error',

    // 特定のオブジェクトプロパティを禁止
    'no-restricted-properties': ['error', {}],

    // returnでの割当を禁止
    'no-return-assign': ['error', 'always'],

    // `return await`を禁止
    'no-return-await': 'error',

    // `javascript:` urlを禁止
    'no-script-url': 'error',

    // 自己割り当ての禁止
    'no-self-assign': ['error', {
      props: true,
    }],

    // 両側が同じ比較の禁止
    'no-self-compare': 'error',

    // コンマ演算子の禁止
    'no-sequences': 'error',

    // `throw`できるものを制限
    'no-throw-literal': 'error',

    // ループ内で変数を変更を強制
    'no-unmodified-loop-condition': 'off',

    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],

    // 未使用のラベルを禁止
    'no-unused-labels': 'error',

    // 不要な .call() と .apply() の禁止
    'no-useless-call': 'off',

    // 不要な`catch`の禁止
    'no-useless-catch': 'error',

    // 不要な文字結合の禁止
    'no-useless-concat': 'error',

    // 不要な文字列のエスケープを禁止
    'no-useless-escape': 'error',

    // 不要な`return`の禁止
    'no-useless-return': 'error',

    // voidの禁止
    'no-void': 'error',

    // 禁止するコメント(TODOなど)
    'no-warning-comments': 'off',

    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // 正規表現パターンの名前付きキャプチャグループ
    'prefer-named-capture-group': 'error',

    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // (New) RegExpではなく`//`で正規表現を作る
    'prefer-regex-literals': 'error',

    // parseInt()の二番目の引数を必要とする
    radix: 'error',

    // https://eslint.org/docs/rules/require-await
    // (note: this is a horrible rule that should never be used) _airbnb
    'require-await': 'off',

    // 正規表現にuフラグをつける事を強制
    'require-unicode-regexp': 'error',

    // スコープの一番上で変数を定義する
    'vars-on-top': 'error',

    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // https://eslint.org/docs/rules/yoda
    yoda: 'error'
  }
}