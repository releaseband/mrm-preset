module.exports = {
  extends: ['@releaseband/eslint-config'],
  overrides: [
    {
      files: ['eslint/templates/eslint-config.js', 'eslint/templates/eslint-config-typescript.js'],
      rules: {
        'no-template-curly-in-string': 0,
      },
    },
  ],
};
