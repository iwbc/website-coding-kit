module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended', 'stylelint-config-recess-order'],
  rules: {
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': '^_?[-a-z0-9]+$',
  },
}
