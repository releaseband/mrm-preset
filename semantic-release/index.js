const path = require("path");
const { lines, install, copyFiles } = require("mrm-core");

const configFile = "release.config.js";
const releaseWorkflowFile = ".github/workflows/release.yml";

module.exports = function task() {
  const packages = ["@releaseband/semantic-release-npm-github-config"];

  copyFiles(path.join(__dirname, "templates"), [
    configFile,
    releaseWorkflowFile,
  ]);

  install(packages);
};

module.exports.description = "Adds semantic-release";
