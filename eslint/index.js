const path = require('path');
const { packageJson, install, template, lines } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = 'template.eslintrc.js';
const ignoreFile = '.eslintignore';

const ignore = ['node_modules/', '.idea/', '.vscode/', '.history/'];

module.exports = function task({ eslintConfig }) {
  template(configFile, path.join(__dirname, 'templates')).apply({ config: eslintConfig }).save();

  let ext = '.js';
  if (eslintConfig.includes('typescript')) {
    ext += ',.ts';
  }

  const pkg = packageJson();
  pkg.setScript('lint', `eslint . --ext ${ext} --fix`);
  pkg.save();

  install(eslintConfig);

  installPeerDeps(eslintConfig);

  lines(ignoreFile).add(ignore).save();
};

module.exports.description = 'Adds eslint';
module.exports.parameters = {
  eslintConfig: {
    type: 'input',
    message: 'ESLint config shareable config',
    default: '@releaseband/eslint-config',
  },
};
