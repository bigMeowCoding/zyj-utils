module.exports = {
  env: { browser: true, amd: true, jest: true, node: true, es6: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["html", "jest", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    "arrow-parens": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    semi: ["error", "always"],
    curly: ["error", "all"],
    quotes: "off",
    "comma-dangle": "off",
    "space-before-function-paren": 0,
    "eol-last": 0,
    "no-unused-vars": "warn",
    // "@typescript-eslint/explicit-module-boundary-types": 0,
    // "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    // "@typescript-eslint/no-empty-function": 0,
    // "@typescript-eslint/no-non-null-assertion": 0,
    // "@typescript-eslint/no-unused-vars": [
    //   1,
    //   {
    //     args: "none",
    //     caughtErrors: "none",
    //     ignoreRestSiblings: true,
    //   },
    // ],
  },
};