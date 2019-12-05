"use strict";

module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    extends: "eslint:recommended",
    rules: {
        "prefer-const": ["error", { destructuring: "all" }], //constの使用を提案する
        camelcase: ["error", { properties: "never" }], //変数の命名をキャメルケース(camelCase)にする
    }
};
