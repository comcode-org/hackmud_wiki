# hackmud_wiki

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Setting up a local environment

### Prerequisites

- [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository
1. Set your Node.js runtime to version >= `20.x` (as specified in "engines" in [./package.json](./package.json))
1. Run `pnpm install` in the root directory

### Running the development server

1. Run `pnpm start` in the root directory
1. Navigate to the URL specified in the console or allow the browser to open it automatically
   - e.g. `[SUCCESS] Docusaurus website is running at: <website_url>`

## Dependency Upgrades

Our projects depend on many pre-existing and separately maintained packages. These packages are regularly updated for security issues, features, and other issues.

### Policy & Values

1. We regularly update our packages to make sure that our individual changes are small. This makes debugging and review easier.
1. We don't update major version changes in packages before they are 'out of beta' or had 'enough bake time'.
1. We optimistically take compatible versions as they are available.
1. We rely on tools and test automation wherever possible to reduce the cost on the team for package updates.
1. We use team judgment, validate our assumptions with others and make exceptions to our policy where appropriate.
1. We document any upgrade specific decisions in the created issue for that upgrade.

### Upgrade Process

This upgrade process is written for a major version upgrade with breaking changes which directly have impact on our project. This process is based on [the webpack major version upgrade guide](https://webpack.js.org/migrate/5/). The process can be remixed and composed to handle any size and sets of dependency upgrades. For simpler upgrades, only do the steps which are applicable. All PRs should be the smallest possible and maintain the release-ability of the production branch.

1. Identify any specific guides for the major version upgrade. Follow them if available
1. If we are upgrading multiple major versions, we do them in sequence one at a time
1. Identify any required dependent loaders, plugins or package version requirements, run the upgrade process for them
1. Create `topic branch`
1. Upgrade package to latest version with the same major version. (compatible semver)
1. Fix all build warnings and deprecations
1. Migrate any compatible build flags
1. Run tests and turn on any 'major version mode' compatability testing flags during testing (revert before merge)
1. Create PR on `topic branch` and merge with standard process
1. Create new `topic branch`
1. Upgrade package to next major version
1. Clean up and migrate any incompatible build flags
1. Create PR on new `topic branch` and merge with standard process
