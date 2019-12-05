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
        'prefer-const': ['error', { destructuring: 'all' }], //constの使用を提案する
        'no-var': 'error', //varを使わない

        'no-new-object': 'error', //オブジェクトはリテラル({})を使用して作成する
        'object-shorthand': ['error', 'always'], //オブジェクトのショートハンド構文を使う
        'quote-props': ['error', 'as-needed'], //必要なときだけプロパティを引用囲う

        'no-array-constructor': 'error', //配列はリテラル([])を使用して作成する
        'array-callback-return': 'error', //配列メソットのコールバックでreturnを利用する

        'prefer-destructuring': 'error', //分割代入を利用

        quotes: ['error', 'single'], //引用符をシングルクォートにする
        'prefer-template': 'error', //文字列連結の代わりにテンプレートリテラルを使用
        'template-curly-spacing': 'error', //テンプレート文字列の空白

        'no-eval': 'error', //eval()を利用しない

        'func-style': 'error', //関数式を利用
        'wrap-iife': 'error', //即時関数を囲う
        'no-loop-func': 'error', //ループ内で関数を作成しない
        'no-new-func': 'error', //newで関数を作成しない
        'space-before-function-paren': 'error', //関数の()の前後に空白をつける
        'no-param-reassign': 'error', //関数パラメーターの再割り当てを許可しない

        'space-before-blocks': 'error', //{}の前後に空白をつける

        'prefer-spread': 'error', //.apply()代わりにスプレッド演算子を使用

        camelcase: ['error', { properties: 'never' }], //変数の命名をキャメルケース(camelCase)にする
    }
};
