module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:wdio/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  plugins: [
    'wdio',
    'vue',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [ 'error', 'always' ],
    curly: [ 'error', 'all' ],
    'template-curly-spacing': 'off',
    indent: [ 'error', 2, { ignoredNodes: [ 'TemplateLiteral' ] }],
    'no-plusplus': 'off',
    'func-names': [ 'off' ],
    'class-methods-use-this': [ 'off' ],
    'no-nested-ternary': [ 'off' ],
    'new-parens': [ 'off' ],
    'array-bracket-spacing': [ 'error', 'always', { singleValue: true, objectsInArrays: false }],
    'no-underscore-dangle': [ 'off' ],
    'no-param-reassign': [ 'off' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'no-shadow': [ 'off', { builtinGlobals: true }],
    'space-before-function-paren': [ 'error', 'always' ],
  },
  overrides: [
    {
      files: [
        '**/test/e2e/**/*.spec.{j,t}s?(x)',
      ],
    },
  ],
};
