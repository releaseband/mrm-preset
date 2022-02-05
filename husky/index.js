const husky = require('husky');
const { packageJson, install } = require('mrm-core');

const packages = ['husky', 'is-ci'];

module.exports = function task() {
  const pkg = packageJson();
  pkg.setScript('prepare', 'is-ci || husky install');
  pkg.save();

  install(packages);

  husky.install();
};

module.exports.description = 'Adds husky';
