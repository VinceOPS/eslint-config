module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks", "simple-import-sort"],
  rules: {
    "sort-imports": ["warn", { ignoreCase: true, ignoreDeclarationSort: true }],
    semi: ["error", "always"],
    "prettier/prettier": ["error", { singleQuote: true }],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "simple-import-sort/imports": ["error", {
      "groups": [
        // `react` related packages come first.
        ["^react$", "^react-dom$"],
        // Internal packages. And "Side effect imports" (polluting namespace)
        ["^@?\\w", "^\\u0000"],
        // Parent imports (put `..` last). And other relative imports (put `.` last).
        ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        // Style imports.
        ["^.+\\.s?css$"],
      ]
    }],
    "sort-imports": "off",
    "import/order": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
