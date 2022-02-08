module.exports = {
  extends: ['@releaseband/eslint-config'],
  overrides: [
    {
      files: ['eslint/templates/template.eslintrc.js'],
      rules: {
        'no-template-curly-in-string': 0,
      },
    },
  ],
};
