const { execSync } = require('child_process');

// eslint-disable-next-line import/prefer-default-export
export function installPeerDeps(pkg) {
  execSync(`npx install-peerdeps --dev ${pkg}`, { stdio: 'inherit' });
}
