module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'lines-around-directive': 0,
    'global-require': 0,
    'no-buffer-constructor': 0,
    'no-new-require': 0,
    'no-path-concat': 0,
    '@typescript-eslint/consistent-type-imports': 0,
  },
};
