module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', 'standard-jsx'],
  parser: 'babel-eslint',
  'env': {
    'browser': true,
    'node': true
  },
  // add your custom rules here
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  globals: {
    BASE_NAME:true,
    '__DEV__': true,
    __uri: true
  },
  rules: {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Nerv", "args": "after-used", "ignoreRestSiblings": false }],
    // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // 'comma-dangle': ['error', {
    //   'arrays': 'always-multiline',
    //   'objects': 'always-multiline',
    //   'imports': 'always-multiline',
    //   'exports': 'always-multiline',
    //   'functions': 'never'
    // }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
