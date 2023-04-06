# Console Remover

This is a VSCode extension that removes all `console.log` statements from your JavaScript and TypeScript files in a project in a single command.

## Features

- Remove `console.log` statements from the current open file.
- Remove `console.log` statements from all open files in the current workspace.
- Remove `console.log` statements from all JavaScript and TypeScript files in the current project.

## Usage

1. Open the command palette by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
2. Search for "Console Remover" and select one of the three available options:
   - "Console Remover: Remove console.log from current document" or command `removeConsoleLogsCurrentFile` will removes `console.log` statements from the current open file.
   - Type "Console Remover: Remove console.log from all opened documents" or command `removeConsoleLogsOpenedFiles` will removes `console.log` statements from all open files in the current window.
   - "Console Remover: Remove console.log from entire project" or command `removeConsoleLogsFromProject` will removes `console.log` statements from all JavaScript and TypeScript files in the current project.
3. Confirm the action by clicking "Yes" in the confirmation dialog (only applicable for multiple files)

## Release Notes

### 0.0.1

- Added command to remove console.log from single document.
- Added command to remove console.log from opened documents.
- Added command to remove console.log from entire project.
- Test case for a function for CI/CI pipeline.
- Class for creating temporary file while testing.
- Added `.github/workflows/main.yaml` for Github action CI/CD pipeline. 


# Contributing to Console Remover

🎉👍 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to Console Remover, which is hosted in the [Console Remover](https://github.com/neerajkumar161/console-remover) on GitHub. These are just guidelines, not rules, so use your best judgment and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [Console Remover Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [the project maintainers](mailto:maintainers@ennkay161@gmail.com).

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check if the bug is already reported in the [Issues](https://github.com/neerajkumar161/console-remover/issues) section. If the bug is already reported, please add a comment to the existing issue.

When you are creating a bug report, please include as many details as possible. Include information about the operating system, the version of Visual Studio Code you are using, and any error messages you have received. If possible, include steps to reproduce the bug.

### Suggesting Enhancements

Before creating an enhancement suggestion, please check if the suggestion is already in the [Issues](https://github.com/neerajkumar161/console-remover/issues) section. If the suggestion is already there, please add a comment to the existing issue.

When you are creating an enhancement suggestion, please include as many details as possible. Include a clear and concise description of the enhancement, and explain why it would be useful.

### Pull Requests

We welcome pull requests! Before creating a pull request, please make sure that:

- The code is consistent with the style of the rest of the project.
- Your commit message follows the [Conventional Commits specification](https://www.conventionalcommits.org/).
- Your code is thoroughly tested.
- Your changes do not introduce any new issues.

## License

By contributing to Console Remover, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## Acknowledgments

This document is adapted from the [Atom contributing guidelines](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).

**Please give a start if you liked the extension. Enjoy!**
