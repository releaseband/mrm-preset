# mrm-preset

[mrm](https://github.com/sapegin/mrm) preset

## Tasks

- commitlint - install commitlint and commitizen, add config files, add commit-msg hook
- eslint - install eslint, add config and ignore file
- github-action - add GitHub Action workflows
- gitignore - add ignore file
- husky - install husky
- lint-staged - install lint-stage, add config file, add pre-commit hook
- markdownlint - install markdownlint, add config and ignore file
- prettier - install prettier, add config and ignore file
- semantic-release - install semantic-release, add config file, add release workflow for GitHub action

## Aliases

- init - run all tasks

## Usage

```bash
npx mrm init --preset @releaseband/mrm-preset
```

or

```bash
npx mrm gitignore eslint --preset @releaseband/mrm-preset
```
