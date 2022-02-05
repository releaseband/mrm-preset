const path = require('path');
const { copyFiles } = require('mrm-core');

const workflows = ['.github/workflows/lint.yml', '.github/workflows/release.yml'];

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), workflows, { overwrite: true });
};

module.exports.description = 'Adds GitHub Actions';
