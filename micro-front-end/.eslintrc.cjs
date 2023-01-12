/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "comma-dangle": "off",
    "vue/multi-word-component-names": ["error", { ignores: ["index"] }],
    //"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/newline-after-import": "off",
    "import/no-absolute-path": "off", // import ./public
    "import/no-unresolved": "off",
    "no-unused-vars": "off" // use @typescript-eslint/no-unused-vars to check. (warnng level)
  }
}
