module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [0],
    'no-param-reassign': ['error', { props: false }],
    'no-console': [0],
    'indent': [0],
  },
  globals: {}
}
