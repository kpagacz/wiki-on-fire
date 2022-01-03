module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    "linebreak-style": "off",
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
  }]
  },
};
