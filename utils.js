const { execSync } = require('child_process');

// eslint-disable-next-line import/prefer-default-export
module.exports.installPeerDeps = function installPeerDeps(pkg) {
  execSync(`npx install-peerdeps --dev ${pkg}`, { stdio: 'inherit' });
};
