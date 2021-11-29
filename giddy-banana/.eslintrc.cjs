module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "google",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "double"
    ],
    "linebreak-style": "off"
  }
};
