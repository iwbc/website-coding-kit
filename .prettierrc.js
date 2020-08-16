module.exports = {
  printWidth: 120,
  semi: false,
  arrowParens: 'always',
  singleQuote: true,
  overrides: [
    {
      files: '*.ejs',
      options: {
        printWidth: 1000000,
        parser: 'html',
      },
    },
  ],
}
