const { execSync } = require('child_process');

function npx(command) {
  execSync(`npx ${command}`, { stdio: 'inherit' });
}

module.exports.npx = npx;

module.exports.installPeerDeps = function installPeerDeps(pkg) {
  npx(`install-peerdeps --dev ${pkg}`);
};
