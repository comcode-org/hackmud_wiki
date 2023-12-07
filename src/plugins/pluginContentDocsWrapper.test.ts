import { describe, expect, it } from "@jest/globals";
import { getSlug } from "./pluginContentDocsWrapper";

describe("pluginContentDocsWrapper", () => {
  it("converts basic strings to slugs", () => {
    expect(getSlug("foo")).toBe("/foo");
    expect(getSlug("/foo")).toBe("/foo");
    expect(getSlug("foo bar")).toBe("/foo_bar");
  });
});
