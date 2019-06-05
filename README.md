# @solid-soda/scripts

Speed up the creation and maintenance of your JS applications. Zero configuration way to use modern code-quality tools.

## TL;DR

```sh
yarn add -D @solid-soda/scripts
yarn soda init

yarn s lint
yarn s pretty
```

## Motivation

1. Before start to code we must set-up ESLint, Stylelint, Prettier, Commitizen, etc. We can to automate all this. Machines have to suffer.
2. New lint rule adding is a hell. We provide the one source of true for any project. Just bump `@solid-soda/scripts` in your project.

## Install

```sh
yarn add -D @solid-soda/scripts
yarn soda init
```

Or if you prefer `npm`:

```sh
npm install --save-dev @solid-soda/scripts
npm run soda init
```

## Scripts

`@solid-soda/scripts` provides many scripts for JS application maintaince.

### Linter

```sh
yarn soda lint
```

It performs static analysis of your JS/TS code and stylesheets.

Command runs [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) under the hood, but we don't allow to modify their configuration. One config to rule them all.

This command allow `--fix` option to fix all fixable errors in your code.

### Prettier

```sh
yarn soda pretty
```

It just formats the code.

Command runs [Prettier](https://prettier.io/) with basic fancy configuration, we don't allow to modify it. One config to rule them all.

### Commit creation

```
yarn soda cz
```

It starts nice CLI for creation commit with [conventional commit messages](https://www.conventionalcommits.org) rules.
![CLI screenshot](./assets/add-commit.png)

Command starts [Commitizen CLI](http://commitizen.github.io/cz-cli/), it uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) configuration and doesn't allow to modify it. One config to rule them all.

### Release

```
yarn soda release
```

It bump version in `package.json`, generate `CHANGELOG.md` and create git tag, with [semver](https://semver.org/) and [conventional commit messages](https://www.conventionalcommits.org).

Command runs [Standard Version](https://github.com/conventional-changelog/standard-version).

## Languages and Frameworks

### TypeScript

TypeScript support out of the box

### React

React/JSX support out of the box

### Svelte

- Install [prettier-plugin-svelte](https://github.com/UnwrittenFun/prettier-plugin-svelte)
- Install [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3)
- Enjoy!
