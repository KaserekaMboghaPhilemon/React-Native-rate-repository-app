// eslint.config.js
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends("expo"),
  {
    ignores: ["node_modules/", ".expo/", "dist/"],
  },
];
