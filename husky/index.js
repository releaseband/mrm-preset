const path = require("path");
const { packageJson, install } = require("mrm-core");
const { execa } = require("execa");

const packages = ["husky", "is-ci"];

module.exports = async function task() {
  const pkg = packageJson();
  pkg.appendScript("prepare", "is-ci || husky install");
  pkg.save();

  install(packages);

  try {
    let subprocess = await execa("npx", ["husky", "install"]);
    console.log(subprocess.stdout);

    subprocess = await execa("npx", [
      "husky",
      "add",
      ".husky/pre-commit",
      "npx --no-install lint-staged",
    ]);
    console.log(subprocess.stdout);

    subprocess = await execa("npx", [
      "husky",
      "add",
      ".husky/prepare-commit-msg",
      "exec < /dev/tty && git cz --hook || true",
    ]);
    console.log(subprocess.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.description = "Adds husky";
