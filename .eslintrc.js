module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-undef': 0,
    'no-multi-assign': 'off', 
    'no-console': 'off',
    'no-debugger': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'off',
  },
};
