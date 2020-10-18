module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project:"./tsconfig.json"
  },
  plugins: [
    "prettier",
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "prettier/prettier":["error", {"endOfLine":"auto"}],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
		"react/prop-types":"off",
		"no-use-before-define":"off",
		"react/jsx-filename-extension":["warn",{extensions:[".tsx",".ts"]}],
		"@typescript-eslint/naming-convention":"off"
  },
};
