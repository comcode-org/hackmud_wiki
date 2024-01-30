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
        title: "Scripts",
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
        title: "Scripts",
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
        title: "Scripts",
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
        title: "Scripts",
        description:
          "This is an auto-generated list of all the executive upgrades.",
        slug: "upgrades/executive",
      },
      items: [{ type: "autogenerated", dirName: "upgrades/executive" }],
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
        description: "This is an auto-generated list of all the locks.",
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
};

module.exports = sidebars;
