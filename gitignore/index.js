const { lines } = require("mrm-core");

const remove = ["node_modules", "package-lock.json"];
const add = [
  "node_modules/",
  ".DS_Store",
  "Thumbs.db",
  ".idea/",
  ".vscode/",
  ".history/",
  "*.sublime-project",
  "*.sublime-workspace",
  "*.log",
  "yarn.lock",
  "pnpm-lock.yaml",
];

module.exports = function task() {
  lines(".gitignore").remove(remove).add(add).save();
};

module.exports.description = "Adds .gitignore";
