const GITHUB_ORG = "comcode-org";
const GITHUB_PROJECT = "hackmud_wiki";

const config = {
  /**
   * GENERAL CONFIG
   */
  // Metadata
  title: "hackmud Wiki",
  tagline: "Knowledge repository for the video game hackmud",
  //favicon: 'img/favicon.ico',

  // Deployment details
  url: `https://${GITHUB_ORG}.github.io`,
  baseUrl: `/${GITHUB_PROJECT}/`,

  // GitHub Pages config for CLI deployment
  organizationName: GITHUB_ORG,
  projectName: GITHUB_PROJECT,

  // Fail loudly on broken links
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Internationalization options, useful to set even if you only support one
  // language because it generates the `lang` attribute on the `html` tag
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  /**
   * INSTALLED PLUGINS
   */
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        // Path of the docs plugin relative to the root. Since it's the only
        // plugin we're using, put it at the top
        routeBasePath: "/",
        // Base url for "Edit This Page" button on content pages
        // TODO: decide whether to accept *content* edits directly to `main`,
        // or have a staging branch
        editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_PROJECT}/edit/main`,
        // Path to custom sidebar definition(s)
        //sidebarPath: require.resolve('./sidebar.js'),
        // Plugins for remark, at the Markdown AST level
        remarkPlugins: [],
        // Plugins for rehype, at the HTML AST level
        rehypePlugins: [],
      },
    ],
  ],

  /**
   * INSTALLED THEMES
   */
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
  ],

  /**
   * GLOBAL THEME CONFIG
   */
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
      /*logo: {
                alt: 'hackmud logo',
                src: 'img/logo.png'
            }*/
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ComCODE`,
      /*links: [
                {
                    title: 'hackmud',
                    items: [
                        {label: 'Steam', href:'https://store.steampowered.com/app/469920/hackmud/'}
                    ]
                }
            ]*/
    },
  },
};

module.exports = config;
