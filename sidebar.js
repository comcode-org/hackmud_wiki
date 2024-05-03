// @ts-check

// See: https://docusaurus.io/docs/sidebar
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  lockSidebar: [
    {
      type: "category",
      label: "Locks",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Locks",
        description: "This is an auto-generated list of all the locks.",
        slug: "upgrades/locks",
      },
      items: [{ type: "autogenerated", dirName: "upgrades/locks" }],
    },
  ],
  upgradeArchitectSidebar: [
    {
      type: "category",
      label: "Architect",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Architect Upgrades",
        description:
          "This is an auto-generated list of all the architect upgrades.",
        slug: "upgrades/architect",
      },
      items: [{ type: "autogenerated", dirName: "upgrades/architect" }],
    },
  ],
  upgradeInfiltratorSidebar: [
    {
      type: "category",
      label: "Infiltrator",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Infiltrator Upgrades",
        description:
          "This is an auto-generated list of all the infiltrator upgrades.",
        slug: "upgrades/infiltrator",
      },
      items: [{ type: "autogenerated", dirName: "upgrades/infiltrator" }],
    },
  ],
  upgradeScavengerSidebar: [
    {
      type: "category",
      label: "Scavenger",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Scavenger Upgrades",
        description:
          "This is an auto-generated list of all the scavenger upgrades.",
        slug: "upgrades/scavenger",
      },
      items: [{ type: "autogenerated", dirName: "upgrades/scavenger" }],
    },
  ],
  upgradeExecutiveSidebar: [
    {
      type: "category",
      label: "Executive",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Executive Upgrades",
        description:
          "This is an auto-generated list of all the executive upgrades.",
        slug: "upgrades/executive",
      },
      items: [{ type: "autogenerated", dirName: "upgrades/executive" }],
    },
  ],
  upgradeOtherSidebar: [
    {
      type: "category",
      label: "Other",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Other Upgrades",
        description:
          "This is an auto-generated list of all the upgrades which do not fit elsewhere.",
        slug: "upgrades/other",
      },
      items: [{ type: "autogenerated", dirName: "upgrades/other" }],
    },
  ],
  characterSidebar: [
    {
      type: "category",
      label: "Characters",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Characters",
        description:
          "This is an auto-generated list of characters in hackmud's storyline.",
        slug: "lore/characters",
      },
      items: [{ type: "autogenerated", dirName: "lore/characters" }],
    },
  ],
  eventSidebar: [
    {
      type: "category",
      label: "Events",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Events",
        description: "This is an auto-generated list of all events.",
        slug: "lore/events",
      },
      items: [{ type: "autogenerated", dirName: "lore/events" }],
    },
  ],
  scriptsLibSidebar: [
    {
      type: "category",
      label: "scripts.lib",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "scripts.lib",
        description: "This is an auto-generated list of scripts.lib functions.",
        slug: "scripting/scripts_lib",
      },
      items: [{ type: "autogenerated", dirName: "scripting/scripts.lib" }],
    },
  ],
  trustScriptsSidebar: [
    {
      type: "category",
      label: "Trust Scripts",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Trust Scripts",
        description: "This is an auto-generated list of all trust scripts.",
        slug: "scripting/trust_scripts",
      },
      items: [{ type: "autogenerated", dirName: "scripting/trust_scripts" }],
    },
  ],
  databaseSidebar: [
    {
      type: "category",
      label: "Database",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Database Functions",
        description:
          "Users in hackmud are given a MongoDB collection which can be manipulated via in-game scripting. This is an auto-generated list of database functions, accessible via the #db preprocessor directive.",
        slug: "scripting/db",
      },
      items: [{ type: "autogenerated", dirName: "scripting/db" }],
    },
  ],
  directivesSidebar: [
    {
      type: "category",
      label: "JavaScript Extensions",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "JavaScript Extensions",
        description:
          "hackmud scripts have access to a variety of hackmud-specific features that are not present in other JavaScript environments. This is an auto-generated list of these features, such as preprocessor directives and special global variables.",
        slug: "scripting/extensions",
      },
      items: [{ type: "autogenerated", dirName: "scripting/extensions" }],
    },
  ],
  syntaxSidebar: [
    {
      type: "category",
      label: "Miscellaneous Syntax",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Miscellaneous Syntax",
        description:
          "This is an autogenerated list of miscellaneous hackmud syntactical features. Color codes, macro commands, and chat-window commands all welcome here.",
        slug: "scripting/syntax",
      },
      items: [{ type: "autogenerated", dirName: "scripting/syntax" }],
    },
  ],
  newPlayersSidebar: [
    {
      type: "category",
      label: "New Players",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "New Players",
        description:
          "This is an auto-generated list of guides for new players.",
        slug: "guides/new_players",
      },
      items: [{ type: "autogenerated", dirName: "guides/new_players" }],
    },
  ],
  advancedSidebar: [
    {
      type: "category",
      label: "Advanced Guides",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Advanced Guides",
        description: "This is an auto-generated list of advanced guides.",
        slug: "guides/advanced",
      },
      items: [{ type: "autogenerated", dirName: "guides/advanced" }],
    },
  ],
  miscGuidesSidebar: [
    {
      type: "category",
      label: "Misc",
      collapsible: false,
      link: {
        type: "generated-index",
        title: "Misc Guides",
        description:
          "This is an auto-generated list of miscellaneous guides.",
        slug: "guides/misc",
      },
      items: [{ type: "autogenerated", dirName: "guides/misc" }],
    },
  ]
};

module.exports = sidebars;
