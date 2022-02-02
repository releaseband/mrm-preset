const path = require("path");
const { packageJson, install, copyFiles } = require("mrm-core");

const commitlintConfigFile = "commitlint.config.js";
const commitizenConfigFile = ".cz.json";

const packages = [
  "@commitlint/cli",
  "@commitlint/cz-commitlint",
  "commitizen",
  "@releaseband/commitlint-config",
];

module.exports = function task() {
  copyFiles(path.join(__dirname, "templates"), [
    commitlintConfigFile,
    commitizenConfigFile,
  ]);

  const pkg = packageJson();
  pkg.appendScript("commit", "cz");
  pkg.save();

  install(packages);
};

module.exports.description = "Adds commitlint";
