# hackmud_wiki

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Setting up a local environment

### Prerequisites

- [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the         repository
1. Set your Node.js runtime to version >= `20.x` (as specified in "engines" in [./package.json](./package.json))
1. Run `pnpm install` in the root directory

### Running the development server

1. Run `pnpm start` in the root directory
1. Navigate to the URL specified in the console or allow the browser to open it automatically
   - e.g. `[SUCCESS] Docusaurus website is running at: <website_url>`

## Content Guide

### General

1. Only create articles with the intention to provide a majority of the info. Empty articles or placeholder articles should not be created.
1. All articles should pertain to hackmud, its lore, or its mechanics.
1. Articles should not be created pertaining to the developers, players, or any other real life person.
1. All articles relating to mechanics should contain content that is currently in game. Articles should not contain historic or removed info.
1. Any game text content/output should be presented as it appears in game and not be corrected for formatting, spelling, or grammar. If information does not pertain to the article, omitting the lines and replacing them with "\<lines omitted\>" is acceptable.
1. When in doubt, infer appropriate styling/content from previously written articles. If there are still questions regarding styling or content, list these in a separate issue so that they can be addressed for content guide improvements.

### Community

1. Articles detailing or describing user scripts are not allowed.
1. Articles about third party programs are not allowed. Examples include Autohotkey, Sandboxie, JS libraries, etc.
1. Articles that violate the hackmud discord rules or volunteer code of conduct are not permitted.

### Article Titles

1. Capitalization of in game upgrades, corporations, or entities should follow in-game styling and capitalization.

### Writing

1. The overall purpose of an article is to document facts. Speculation should be left out of articles. Citations for information are not required but may be requested during the Pull Request review process.
1. All articles should be written in third person with no referential nouns (e.g. you, your). An exception to this is for Tutorials, FAQs, and Writeups.
   - Bad Example: `ez_21 is one of the first upgrades you could find.`
   - Good Example: `ez_21 is a tier 1 lock. It is commonly found in t1 NPCs.`
1. Tutorial info should only be included in dedicated Tutorials, FAQs, and Writeups.
1. Articles should only contain information pertaining to content currently implemented in hackmud. Historic or planned content should not be added.
   - Bad Example: `Previously, in sys.access_log, there would be NPCs that connect to users. These were called Account NPCs.`
1. When including example code or scripts, they should be added in the markdown inside of a code block with the proper syntax highlighting.

```JS
function(context,args){
	return `D:)`
}
```

#### Spelling

1.  Articles should be written using American English.

#### Capitalization

1. When referring to upgrades do not capitalize them as proper nouns.
1. The name hackmud is always lowercase.
1. Even at the start of a sentence, a word or upgrade that should be lowercase is still lowercase.

#### Disambiguating Parameters, Args, Key:Value Pairs

1. **Arguments** - Data passed into functions or the command line. Can also refer to key:value pairs.
1. **args** - The default name of the second parameter which is passed into a user script function. We do not refer to Arguments as Args or args as shorthand in articles.
1. **Key** - The name part of a key:value pair.
1. **Value** - The data part of a key:value pair.
1. **Key:Value Pair** - A group of named content. Sometimes seen as kvp. We do not use kvp in wiki articles.
1. **Parameters** - The names of data passed into functions.
1. **Params** - Short version of parameters. We do not refer to Parameters as Params or params as shorthand in articles. Do not use unless a quote of in-game content.

### Headings

1. All headings should start at 2 `#`s and increment as needed.
1. Headings with 1 `#` are reserved for the auto-generated article title.
1. Headings should use sentence capitalization and not title capitalization.
1. Exceptions to heading capitalization are upgrades, corporations, and entities. Those should follow in-game styling and capitalization.
1. If a section of an article is empty or needs information filled in, the pull request should be created as a draft with a comment requesting the help needed.
1. Headings should never contain links.

### Italicization

1. Any instance of the name of a video game should be in italics. For instance: "_hackmud_"
1. Only official edition names should be italicized. For instance: "_hackmud_" or "_binmat_".

### Linking

1. Two links should not be immediately back to back to avoid appearing as one link. Comma-separated lists are okay.
1. Links to other articles should not be excessively repeated. Only link to an article once per Heading section.

### Defining Spoilers

#### Upgrades

1. The full list of argument keys are not a spoiler.
1. Any feature of a lock that can be discovered by providing missing or incorrect arguments is not a spoiler. For example, given the following:

   ![image](https://github.com/comcode-org/hackmud_wiki/assets/1775803/2b1a826a-9a73-490c-9019-f5649583af0c)  
   the fact that the EZ_21 lock expects an `EZ_21` key, that the value of the `EZ_21` argument should be a string, and that said string is some kind of unlock command do not need to be obscured.

1. Example full unlock invocations are spoilers. The complete list of unlock commands or for `c003` the complete list of colors would be spoilers.

#### Lore

1. For quests/events that are still playable, the entry point should not be considered a spoiler, and should be clearly separated from any further exploration of the script(s). Pretty much everything else is a spoiler, as it depends on the user having figured out the correct arguments to pass to proceed past the entry point.
1. A short summary of a character should not be considered a spoiler. Details about the character that are _only_ revealed by having progressed through some event or other puzzle are spoilers.

#### Scripting Stuff

Generally not applicable. If there are spoiler concerns in documentation or guides, they can be handled on a case-by-case basis, and the Spoiler Policy can be updated if necessary.

### Handling Spoilers

1. Spoilers should exist somewhere on the same page as the relevant content. There should not be separate spoiler pages for a given topic.
1. When practical, spoilers should exist in discrete blocks that can be toggled between a hidden and visible state. These blocks should be hidden by default.
1. When possible, spoilers should be grouped together into a single section per page/topic. We should not use inline spoiler obfuscation that occurs in random short chunks throughout a page. They should instead exist in their own, collapsible section.
1. When possible, spoilers should be grouped together into as few of these blocks as possible per page. Small blocks, or other non-standard inline obfuscation, should be avoided.
1. In cases where the vast majority of the content of a given page would be classified as spoilers, and hiding so much of the content would be impractical or otherwise undesirable, it is sufficient to include an overt message warning readers of the spoilers ahead instead of hiding them. This warning should exist either at the top of the page or immediately after a small introductory section that is itself free of spoilers.

### Adding Spoilers

1. Spoilers should be added by following the following example:

```markdown
<details>
  <summary>Lorem Ipsum</summary>

Dolor icecream :)

</details>
```

### Dates

1. Dates should be written in ISO 8601 style, YYYY-MM-DD.
1. Avoid referring to seasons such as summer, instead use early, mid, late 2023.

### Commands

1. When quoting commands they should be formatted like the following: `xena.defender { bank: true, stuff: 123 }`

### Filenames and folder names

1. [Snakecase](https://en.wikipedia.org/wiki/Snake_case) should be used for filenames and folder names.

### Templates

1. Use existing templates.
1. If a template does not exist for what you want to make, propose a new one via a pull request.

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
