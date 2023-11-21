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
1. We optimistically take compatible versions as they are available.
1. We update major version changes in packages when they are 'out of beta' and had 'enough bake time'.
1. We create issues for major version upgrades. Issues are not needed for other upgrades.
1. We document any upgrade specific decisions in the created issue for that upgrade.
1. We rely on tools and test automation wherever possible to reduce the cost on the team for package updates.
1. We use team judgment, validate our assumptions with others and make exceptions to our policy where appropriate.

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

### Spoiler Policy

This is a policy for handling the inclusion of spoilers in wiki content. It defines how to identify a spoiler and how they should fit into the flow of a page.  
The Spoiler Policy should be treated as a living document, and be updated as necessary when spoiler-related concerns arise.

#### Defining Spoilers

##### Upgrades

1. Any feature of a lock that can be discovered by providing incorrect arguments is not a spoiler. For example, given the following:
   ![image](https://github.com/comcode-org/hackmud_wiki/assets/1775803/5d6bd6b4-c346-4bcd-871c-47bb4da5d0bb)
   ![image](https://github.com/comcode-org/hackmud_wiki/assets/1775803/16cd8f43-91e8-4b45-b49c-f0a3f942d639)
   the fact that `ez_21` takes a `string` which is some kind of unlock command, and that `c003` takes a `string` which is the name of a color, do not need to be obscured.
1. Explicit _complete_ answers to locks are spoilers. The complete list of unlock commands, and the complete list of colors would be spoilers. Where many solutions exist, using _one_ answer as an example is fine, e.g. `c001:"blue"` in an example invocation of `c001`, or a single `magnara` solution.

##### Lore

1. For quests/events that are still playable, the entry point should not be considered a spoiler, and should be clearly separated from any further exploration of the script(s). Pretty much everything else is a spoiler, as it depends on the user having figured out the correct arguments to pass to proceed past the entry point.
1. A short summary of a character should not be considered a spoiler. Details about the character that are _only_ revealed by having progressed through some event or other puzzle are spoilers.

##### Scripting Stuff

Generally not applicable. If there are spoiler concerns in documentation or guides, they can be handled on a case-by-case basis, and the Spoiler Policy can be updated if necessary.

#### Handling Spoilers

1. Spoilers should exist somewhere on the same page as the relevant content. There should not be separate spoiler pages for a given topic.
1. When practical, spoilers should exist in discrete blocks that can be toggled between a hidden and visible state. These blocks should be hidden by default.
1. When possible, spoilers should be grouped together into a single section per page/topic. We should not use inline spoiler obfuscation that occurs in random short chunks throughout a page. They should instead exist in their own, collapsible section.
1. When possible, spoilers should be grouped together into as few of these blocks as possible per page. Small blocks, or other non-standard inline obfuscation, should be avoided.
1. In cases where the vast majority of the content of a given page would be classified as spoilers, and hiding so much of the content would be impractical or otherwise undesirable, it is sufficient to include an overt message warning readers of the spoilers ahead instead of hiding them. This warning should exist either at the top of the page or immediately after a small introductory section that is itself free of spoilers.
