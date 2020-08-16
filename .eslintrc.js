module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'warn',
  },
}
