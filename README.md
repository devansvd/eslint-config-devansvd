<div align="center">
<h1>eslint-config-devansvd</h1>

<p>EsLint rules for all my projects. Feel free to use these conventions :-)</p>
</div>

---

<!-- prettier-ignore-start -->
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

  - [What it does](#what-it-does)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Setting up Editor](#setting-up-editor)
    - [VSCode Setup](#vscode-setup)
  - [Issue](#issue)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What it does

This modules provides a flexible way to integrate [`Eslint`][eslint] + [`Airbnb`][airbnb] style guide conventions + [`Prettier`][prettier]. It eliminates installing bunch of devDependencies everytime setting up a new project - Makes setup easier. To summarize what it does it takes care of everything.

-   Lints JavaScript based on the latest Popular style guide standards
-   Fixes prettier issues and formatting errors
-   Some of the rules are tweaked to my personal preference
-	Override rules as you'd like

**PS**: I may replace all style guide rules with my own preference soon.

## Installation

Package is intended to be installed as a devDependencies in all my projects - Should not be pushed to Production, Can be installed via [npm][npm] bundled with [node][node].

If you don't already have a package.json file, create one with `npm init -y`.

```
npm install --save-dev eslint-config-devansvd

```

**Note**: It will install bunch of dependencies which are need for the Linter and formatter to work. Since this package is intended to be installed as a devDependency I won't worry about anything.

These are all the dependecies packages `eslint-config-airbnb, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-prettier, eslint-plugin-react, eslint-plugin-react-hooks, eslint, prettier`

Can be also installed using `npx install-peerdeps --dev eslint-config-devansvd`

## Usage

Create .eslintrc.js file in project. Just add this to extends

```js
// For all: javascript, Nodejs, React.
module.exports = {
  extends: ['devansvd'],
  rules: {
	// your overrides
  },
};
```

The above config will lint react files too. If don't want to use react, there is also a base config exposed with the package which lints only javascript and nodejs files.

```js
// Only for javascript and Nodejs
module.exports = {
  extends: ['devansvd/base'],
  rules: {
    // your overrides
  },
};
```

Optional: Under `package.json` you can add two scripts to lint and fix

```js
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

Now manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`

## Setting up Editor

Once usage instructions setup done, need to configure your editors for seamless experiences.

### VSCode Setup

-   Install Eslint extenstion
-   Press `Ctrl + ,` or `CMD + ,`(mac) Open `settings.json` from `{}` Icon in the right top corner.
-   Add the settings Below

```js
 "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "editor.codeActionsOnSave": {
        "source.fixAll": true
	},
	//Optional if prettier installed
    "prettier.disableLanguages": [
        "javascript",
        "javascriptreact"
	]
```

**Note**: Prettier extenstion for VScode is not mandatory which is not need to be installed, If you'd like other file extenstions like `.html, .css, etc` You can install prettier extension in that case.

**Summary**: Enabling formatOnSave for all files, Turning off formatOnSave for javascript and javascriptreact formats because EsLint take care that for you `source.fixAll` also avoids multiple times formatting if prettier already installed.

## Issue

Facing issues ? Remove `node_modules` and begin the setup from the beginning.

## License

[`MIT`][license]

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[version-badge]: https://img.shields.io/npm/v/eslint-config-devansvd.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-config-devansvd
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-devansvd.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/eslint-config-devansvd
[license-badge]: https://img.shields.io/npm/l/eslint-config-devansvd.svg?style=flat-square
[license]: https://github.com/devansvd/eslint-config-devansvd/blob/master/LICENSE
[eslint]: https://github.com/eslint/eslint
[airbnb]: https://github.com/airbnb/javascript
[prettier]: https://prettier.io
<!-- prettier-ignore-end -->
