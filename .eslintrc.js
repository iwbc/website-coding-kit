module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
}
