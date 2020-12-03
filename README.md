# monorepo

### About

This sample monorepo demonstrates the capability of using [Lerna](https://github.com/lerna/lerna) and [Yarn](https://github.com/yarnpkg/yarn) [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces) to set up a [Create React App](https://github.com/facebook/create-react-app) monorepo with [CRACO](https://github.com/gsoft-inc/craco). This project is configured to use [TypeScript](https://github.com/microsoft/TypeScript), [ESLint](https://github.com/eslint/eslint), and [Prettier](https://github.com/prettier/prettier).

The packages @namespace/app-one and @namespace/app-two are CRA apps, while @namespace/core is a collection of components that can be consumed by either app.

### Setup

##### Prerequisites

Lerna and Yarn are required.

`npm i -g lerna yarn`

##### Clone repo

` git clone git@github.com:brammitch/monorepo.git`

##### Installation

`cd monorepo`

`yarn install`

##### VSCode Import Suggestions

To get import suggestions from the @namespace/core package, it will need to be built.

`yarn build:core`

##### Running

To start one of the apps, use the scripts in the root package.json.

`yarn start:one` or `yarn start:two`

This will ensure that @namespace/core is compiled prior to being used by either of the apps.

### References

- [A guide through The Wild Wild West of setting up a mono repo with TypeScript, Lerna and Yarn Workspaces](https://medium.com/ah-technology/a-guide-through-the-wild-wild-west-of-setting-up-a-mono-repo-with-typescript-lerna-and-yarn-ed6a1e5467a)
- [React Workspaces Playground](https://github.com/react-workspaces/react-workspaces-playground)
- [Simple monorepo setup with create-react-app and shared component library](https://jibin.tech/monorepo-with-create-react-app/)
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [Using Create-React-App In A Monorepo](https://medium.com/frontend-digest/using-create-react-app-in-a-monorepo-a4e6f25be7aa) -- _Behind Medium Paywall_
