## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Project setup

First, be sure that you're using the project `Node.js` version, and then install dependencies:

```
nvm use <node_version>
npm install
```

TIP: You can use `avn` to deeply integrate into your shell and automatically invoke `nvm` when changing directories. See [deeper-shell-integration](https://github.com/nvm-sh/nvm#deeper-shell-integration).

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run lint:fix
```

### Run unit tests with [Web-Test-Runner](https://modern-web.dev/docs/test-runner/overview/)

```
npm run test:unit:<watch|coverage>
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.


