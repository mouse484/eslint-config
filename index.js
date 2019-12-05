'use strict';

module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    extends: 'eslint:recommended',
    rules: {
        'prefer-const': ['error', { destructuring: 'all' }], // constの使用を提案する
        'no-var': 'error', // varを使わない
        'one-var': ['error', 'never'], // 変数は一つず定義する
        'no-multi-assign': 'error', // 複数の割当の連鎖を禁止

        'max-len': ['error', { ignoreUrls: true, ignoreComments: true }], // 行が長くなりすぎないように

        eqeqeq: 'error', // == x === o

        'no-mixed-operators': 'error', // 複数の演算子が混同する場合()で囲う
        'operator-linebreak': ['error', 'before'], // 改行後の演算子などは前につける
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // ++,--を禁止(forだけok)

        'no-nested-ternary': 'error', // ネストされた三項演算子の禁止
        'no-unneeded-ternary': 'error', // 不要な三項演算子の禁止

        'prefer-spread': 'error', // .apply()代わりにスプレッド演算子を使用

        'no-new-object': 'error', // オブジェクトはリテラル({})を使用して作成する
        'object-shorthand': ['error', 'always'], // オブジェクトのショートハンド構文を使う
        'quote-props': ['error', 'as-needed'], // 必要なときだけプロパティを引用囲う

        'no-array-constructor': 'error', // 配列はリテラル([])を使用して作成する
        'array-callback-return': 'error', // 配列メソットのコールバックでreturnを利用する

        'dot-notation': 'error', // .でプロパティにアクセスする
        'prefer-destructuring': 'error', // 分割代入を利用

        'space-before-blocks': 'error', // {}の前後に空白をつける
        'nonblock-statement-body-position': 'error', // {}を省略した時の本体の位置
        'brace-style': 'error', // {}のスタイル

        quotes: ['error', 'single'], // 引用符をシングルクォートにする
        'prefer-template': 'error', // 文字列連結の代わりにテンプレートリテラルを使用
        'template-curly-spacing': 'error', // テンプレート文字列の空白

        'no-eval': 'error', // eval()を利用しない

        'func-style': 'error', // 関数式を利用
        'wrap-iife': 'error', // 即時関数を囲う
        'no-loop-func': 'error', // ループ内で関数を作成しない
        'no-new-func': 'error', // newで関数を作成しない
        'space-before-function-paren': 'error', // 関数の()の前後に空白をつける
        'no-param-reassign': 'error', // 関数パラメーターの再割り当てを許可しない
        'function-paren-newline': 'error', // 関数の括弧内で一貫した改行を強制する

        'prefer-arrow-callback': 'error', // アロー関数のコールバック
        'arrow-spacing': 'error', // アロー関数の空白
        'arrow-parens': ['error', 'as-needed'], // アロー関数の()を必要に応じてつける
        'arrow-body-style': 'error', // アロー関数の{}を必要に応じてつける
        'no-confusing-arrow': 'error', // 比較と混同される可能性のある矢印関数を禁止
        'implicit-arrow-linebreak': 'error', // アロー関数の暗黙的な返り値を利用する場合の本体の位置

        'no-useless-constructor': 'error', // 不要なコンストラクターの禁止

        'no-duplicate-imports': 'error', // 重複したimportの禁止
        'no-import-assign': 'error', // インポートされたバインディングへの割り当てを禁止

        'generator-star-spacing': ['error', { before: false, after: true }], // ジェネレータ関数の*の位置

        'no-else-return': 'error', // returnしてるのにelseを使うことを許さない

        'spaced-comment': 'error', // コメントの空白

        camelcase: ['error', { properties: 'never' }], // 変数の命名をキャメルケース(camelCase)にする
    }
};
