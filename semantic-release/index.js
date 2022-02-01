const path = require("path");
const { lines, install, template } = require("mrm-core");

const configFile = "release.config.js";
const releaseWorkflowFile = "release.yml";

module.exports = function task() {
  const packages = ["@releaseband/semantic-release-npm-github-config"];

  template(configFile, path.join(__dirname, "templates", configFile))
    .apply()
    .save();

  template(
    path.join(".github", "workflows", releaseWorkflowFile),
    path.join(__dirname, "templates", releaseWorkflowFile)
  )
    .apply()
    .save();

  install(packages);
};

module.exports.description = "Adds semantic-release";
