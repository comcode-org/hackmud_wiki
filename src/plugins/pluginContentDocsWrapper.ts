import pluginContentDocs, {
  LoadedContent,
  LoadedVersion,
  PluginOptions,
} from "@docusaurus/plugin-content-docs";
import { LoadContext, Plugin } from "@docusaurus/types";
import remarkWikiLink from "remark-wiki-link";

const WIKILINK_INTERNAL_CLASSNAME = "wikilink";
const WIKILINK_NEW_CLASSNAME = "wikilink-new";
const CREATE_PAGE_SLUG = "/create_a_page";

function getCurrentVersion(content: LoadedContent): LoadedVersion {
  const currentVersion = content.loadedVersions.find(
    (version) => version.versionName === "current",
  );
  if (currentVersion == undefined) {
    throw new Error("could not find current version");
  }
  return currentVersion;
}

function inferFilenameFromName(name: string): string {
  return name.toLowerCase().replace(/\s/g, "_");
}

function getSlug(nameOrSlug: string): string {
  let slug = nameOrSlug;
  const firstSlashIndex = nameOrSlug.indexOf("/");
  if (firstSlashIndex < 0) {
    slug = "/" + inferFilenameFromName(nameOrSlug);
  } else if (firstSlashIndex > 0) {
    slug = "/" + nameOrSlug;
  }
  return slug;
}

function nameMatchesAlias(name: string, alias: unknown): boolean {
  if (typeof alias === "string") {
    return alias === name;
  } else if (Array.isArray(alias)) {
    return alias.includes(name);
  }
  return false;
}

function createNewPageSlug(slug: string) {
  return `${CREATE_PAGE_SLUG}?path=${slug}`;
}

function getConfiguredWikiLinkPlugin(
  content: LoadedContent,
): [Function, object] {
  const docs = getCurrentVersion(content).docs;
  return [
    remarkWikiLink,
    {
      // class attached to all generated links
      wikiLinkClassName: WIKILINK_INTERNAL_CLASSNAME,

      // class attached to resolved links not found in permalinks
      newClassName: WIKILINK_NEW_CLASSNAME,

      // list of permalinks that exist
      permalinks: docs.map((doc) => doc.permalink),

      // href path that the plugin generates based on the permalink
      hrefTemplate: function (permalink: string): string {
        return permalink;
      },

      /**
       * 1. A wikilink can contain either a page name or slug.
       *    - e.g. `[[Name]]` `[[slug/path]]` `[[Alias:...]]`
       *
       * 2. The resolver will return a permalink for a page where the link name
       *    is the title or the link slug is a suffix* of the permalink.
       *    - *bar/baz matches foo/bar/baz but not foobar/baz
       *
       * 3. The resolver will return a permalink for a page at the highest
       *    directory level possible.
       *    - e.g. bar/baz matches /foo/bar/baz but prefers /bar/baz if present
       *
       * 4. The resolver will return the slug instead if no matching docs exist.
       */
      pageResolver: function (pageName: string): string[] {
        const name = pageName.toLowerCase();
        const slug = getSlug(pageName);

        const relevantDocs = docs.filter(
          (doc) =>
            doc.title.toLowerCase() === name ||
            nameMatchesAlias(name, doc.frontMatter.alias) ||
            doc.permalink.toLowerCase().endsWith(slug),
        );

        if (relevantDocs.length <= 0) {
          return [createNewPageSlug(slug)];
        }

        const topLevelRelevantDoc = relevantDocs.reduce((docA, docB) => {
          const depthA = docA.permalink.split("/").length;
          const depthB = docB.permalink.split("/").length;
          return depthA <= depthB ? docA : docB;
        });

        return [topLevelRelevantDoc.permalink];
      },
    },
  ];
}

/**
 * Returns a copy of the `@docusaurus/plugin-content-docs` plugin.
 *
 * The `contentLoaded` method is overridden to inject the `remark-wiki-link`
 * plugin and a configuration for it.
 */
export default async function pluginContentDocsWrapper(
  context: LoadContext,
  options: PluginOptions,
): Promise<Plugin<LoadedContent>> {
  const originalPlugin = await pluginContentDocs(context, options);
  return {
    ...originalPlugin,
    contentLoaded: function (args) {
      options.remarkPlugins.push(getConfiguredWikiLinkPlugin(args.content));
      return originalPlugin.contentLoaded?.(args);
    },
  };
}

export { validateOptions } from "@docusaurus/plugin-content-docs/lib/options.js";
