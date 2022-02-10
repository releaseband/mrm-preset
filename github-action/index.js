const path = require('path');
const { copyFiles } = require('mrm-core');

const basePath = '.github/workflows/';

const workflowPullRequestToMainBranchList = ['lint', 'lint_test'];

module.exports = function task({ workflowPullRequestToMainBranch }) {
  const workflows = ['release.yml', `${workflowPullRequestToMainBranch}.yml`].map(
    (value) => basePath + value
  );

  copyFiles(path.join(__dirname, 'templates'), workflows, { overwrite: true });
};

module.exports.description = 'Adds GitHub Actions';
module.exports.parameters = {
  workflowPullRequestToMainBranch: {
    type: 'list',
    message: 'Select workflow for pull request to main branch',
    choices: [
      { name: 'lint workflow', value: 'lint' },
      { name: 'lint and test workflow', value: 'lint_test' },
    ],
    default: 'lint_test',
    validate(value) {
      return workflowPullRequestToMainBranchList.includes(value)
        ? true
        : `workflowPullRequestToMainBranch available values: ${workflowPullRequestToMainBranchList.join(
            ', '
          )}`;
    },
  },
};
