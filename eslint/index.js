const path = require('path');
const { packageJson, install, template, lines } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.eslintrc.js';
const ignoreFile = '.eslintignore';

const ignore = ['node_modules/', 'coverage/', '.idea/', '.vscode/', '.history/'];

module.exports = function task({ eslintConfig }) {
  const isTypeScript = eslintConfig.includes('typescript');

  template(
    configFile,
    path.join(
      __dirname,
      'templates',
      isTypeScript ? 'eslint-config-typescript.js' : 'eslint-config.js'
    )
  )
    .apply({ config: eslintConfig })
    .save();

  let ext = '.js';
  if (isTypeScript) {
    ext += ',.ts';

    if (eslintConfig.includes('react')) {
      ext += ',.jsx,.tsx';
    }
  }

  const pkg = packageJson();
  pkg.setScript('lint', `eslint . --ext ${ext} --fix`);
  pkg.save();

  const configPackage = `@releaseband/${eslintConfig}`;

  install(configPackage);

  installPeerDeps(configPackage);

  lines(ignoreFile).add(ignore).save();
};

module.exports.description = 'Adds eslint';
module.exports.parameters = {
  eslintConfig: {
    type: 'input',
    message: 'ESLint config shareable config from releaseband organization',
    default: 'eslint-config',
  },
};
