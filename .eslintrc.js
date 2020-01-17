module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  globals: {
    __static: true,
  },

  parserOptions: {
    // ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['html'],
  rules: {
    'global-require': 0,
    // 'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    // 'import/extensions': 0,
    // 'import/newline-after-import': 0,
    'no-multi-assign': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': 0,
    'no-console': 0,
    camelcase: 0,
    'no-mixed-operators': 0,
    'no-trailing-spaces': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    semi: ['error', 'always'],
  },
};
