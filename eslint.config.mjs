import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  ...compat.config({
    extends: [
      // https://github.com/prettier/eslint-plugin-prettier
      "plugin:prettier/recommended",
      // https://www.npmjs.com/package/eslint-plugin-jsdoc
      "plugin:jsdoc/recommended",
      // https://nextjs.org/docs/basic-features/eslint
      "next/core-web-vitals"
    ],
    plugins: ["prettier"],
    rules: {
      // Turn off jsdoc type rules.
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
      "jsdoc/tag-lines": "off"
    }
  })
];

export default eslintConfig;
