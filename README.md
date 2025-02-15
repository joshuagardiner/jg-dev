# JG.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/ba397ab4-2c96-4a6b-ada3-6c4151a89978/deploy-status)](https://app.netlify.com/sites/jg-dev/deploys)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A learning exercise to implement something using [Next.js](https://nextjs.org).

Tech used:

- [NVM](https://github.com/nvm-sh/nvm)
- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Sass](https://sass-lang.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/#/)
- [GHA](https://github.com/features/actions)
- [Netlify](https://www.netlify.com)
- [Commitizen](https://github.com/commitizen/cz-cli)

## Reports

[Mozilla Observatory](https://observatory.mozilla.org/analyze/joshuagardiner.dev)

## Prerequisites

- The [Node](https://nodejs.org/en/) version is documented in the `.nvmrc` file. If you are using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to get the correct version of Node.
- [npm](https://www.npmjs.com) by using `nvm` this will keep these versions in synchronised.
- The following packages globally installed: `@commitlint/{config-conventional, cli}` and `commitizen`.

## Installation

First, clone the repository and install the dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

## Release

Update the `CHANGELOG.md` with changes above the previous release.

Run the release script:

```bash
DATE=DD-MM-YYYY VERSION=MAJOR.MINOR.PATCH ./scripts/release.sh
```

Ensure the raised draft `PULL_REQUEST` is building and deploying successfully.

Create the `TAG` within GitHub with `CHANGELOG` details.

Merge branch `main` into branch `develop` for `VERSION` and `CHANGELOG` details.
