// @ts-check
import pluginContentDocsWrapper from "./src/plugins/pluginContentDocsWrapper.ts";
import autocolorPlugin from "./src/plugins/rehype/autocolor.js";

const GITHUB_ORG = "comcode-org";
const GITHUB_PROJECT = "hackmud_wiki";

// See: https://docusaurus.io/docs/api/docusaurus-config
/** @type {import('@docusaurus/types').Config} */
const config = {
  // Metadata
  title: "hackmud Wiki",
  tagline: "Knowledge repository for the video game hackmud",
  favicon: "favicon.ico",

  // Deployment details
  url: `https://wiki.hackmud.com`,
  baseUrl: `/`,

  // GitHub Pages config for CLI deployment
  organizationName: GITHUB_ORG,
  projectName: GITHUB_PROJECT,

  // Internationalization options, useful to set even if you only support one
  // language because it generates the `lang` attribute on the `html` tag
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Installed plugins
  plugins: [
    [
      pluginContentDocsWrapper, // wraps @docusaurus/plugin-content-docs
      // See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#configuration
      {
        // Path of the docs plugin relative to the root. Since it's the only
        // plugin we're using, put it at the top
        routeBasePath: "/",
        // Base url for "Edit This Page" button on content pages
        editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_PROJECT}/edit/main`,
        // Path to custom sidebar definition(s)
        sidebarPath: require.resolve("./sidebar.js"),
        // Plugins for remark, at the Markdown AST level
        remarkPlugins: [],
        // Plugins for rehype, at the HTML AST level
        rehypePlugins: [autocolorPlugin],
      },
    ],
  ],

  // Installed themes
  themes: [
    [
      "@docusaurus/theme-classic",
      // See: https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic#configuration
      {
        customCss: "./src/css/custom.css",
      },
    ],
  ],

  // Global theme config
  // See: https://docusaurus.io/docs/api/themes/configuration
  /** @type {import('@docusaurus/theme-common').UserThemeConfig} */
  themeConfig: {
    // Supported and default color modes
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Theme configuration specific to the docs plugin
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "hackmud Wiki",
      items: [
        {
          type: "dropdown",
          label: "Upgrades",
          items: [
            {
              type: "docSidebar",
              sidebarId: "lockSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "upgradeArchitectSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "upgradeInfiltratorSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "upgradeScavengerSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "upgradeExecutiveSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "upgradeOtherSidebar",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Lore",
          items: [
            {
              type: "docSidebar",
              sidebarId: "characterSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "eventSidebar",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Scripting",
          items: [
            {
              type: "docSidebar",
              sidebarId: "scriptsLibSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "trustScriptsSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "databaseSidebar",
            },
            {
              type: "docSidebar",
              sidebarId: "miscSidebar",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Guides",
          items: [
            {
              type: "docSidebar",
              sidebarId: "newPlayersSidebar",
            },
          ],
        },
      ],
    },
    footer: {
      copyright:
        'Licensed by <a href="https://comcode.org/" target="_blank" rel="noopener">ComCODE</a> with <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a> for creative and educational use.',
    },
  },

  // Global markdown config
  // See: https://docusaurus.io/docs/api/docusaurus-config#markdown
  markdown: {
    format: "mdx",
    mermaid: false,
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },
};

export default config;
