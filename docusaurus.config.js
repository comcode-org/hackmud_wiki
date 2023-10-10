// @ts-check
import pluginContentDocsWrapper from "./src/plugins/pluginContentDocsWrapper";

const GITHUB_ORG = "comcode-org";
const GITHUB_PROJECT = "hackmud_wiki";

// See: https://docusaurus.io/docs/api/docusaurus-config
/** @type {import('@docusaurus/types').Config} */
const config = {
  // Metadata
  title: "hackmud Wiki",
  tagline: "Knowledge repository for the video game hackmud",
  //favicon: 'img/favicon.ico',

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
        rehypePlugins: [],
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
              sidebarId: "scriptingSidebar",
            },
          ],
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ComCODE`,
      links: [],
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
