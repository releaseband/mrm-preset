const path = require("path");
const { packageJson, install, copyFiles } = require("mrm-core");

const configFile = "prettier.config.js";

const packages = ["prettier", "@releaseband/prettier-config"];

module.exports = function task() {
  copyFiles(path.join(__dirname, "templates"), configFile);

  const pkg = packageJson();
  pkg.appendScript("format", "prettier --write --ignore-path ./.gitignore .");
  pkg.save();

  install(packages);
};

module.exports.description = "Adds prettier";
