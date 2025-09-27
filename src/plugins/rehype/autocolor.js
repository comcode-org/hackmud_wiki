import { h } from "hastscript";
import { findAndReplace } from "hast-util-find-and-replace";
import { visit } from "unist-util-visit";
import { u } from "unist-builder";

const trustUsers = [
  "accts",
  "autos",
  "binmat",
  "chats",
  "corps",
  "escrow",
  "gui",
  "kernel",
  "market",
  "scripts",
  "sys",
  "trust",
  "users",
  "marks",
];

// Matches (( <content > ))
const regexAutocolorBlock = /\(\((.*?)\)\)/g;

// Matches <user>.<script> *except* when preceeded by a #
// This is so that in #s.<user>.<script>, the s.<user> portion won't be colored
const regexScript =
  /\b(?<!#)([a-z_][a-z0-9_]{0,24})\.([a-z_][a-z0-9_]{0,24})\b/gi;

// Matches %<one character long color tag><content>%
const regexColorTag = /%([0-9a-zA-z])(.+?)%/g;

// Matches <key>: <value> with an arbitrary amount of spaces around the :
// Key can either be a word like some_parameter:
// or a quoted string like "this is multiple words":
// Values can be strings, numbers, null, true, false, or scriptors
// This will also match <key>: { or <key>: [ but will NOT include the { or [ in the match to be colorized
const regexKvp =
  /(\w+|".*?")[ ]*:[ ]*(?:(".*?"|\d+(?:\.\d*)?|null|true|false|#s\.\w+\.\w+)|(?=\{|\[))/g;

// Matches GC strings, e.g. 1Q1T1B1M1K1GC
// Explicitly does NOT match the text GC on its own
// Notably, this only matches uppercase GC strings currently
// This can be changed by adding an i to the regex flags, but lowercase strings will still be converted to uppercase when colorized
const regexGC =
  /(?=\d)(?:(\d+)Q)?(?:(\d{1,3})T)?(?:(\d{1,3})B)?(?:(\d{1,3})M)?(?:(\d{1,3})K)?(\d{1,3})?GC/g;

function colorScript(_fullMatch, user, script) {
  const isTrust = trustUsers.includes(user);
  return [
    h("span", { class: `color-tag color-${isTrust ? "trust" : "user"}` }, user),
    u("text", "."),
    h("span", { class: "color-tag color-script" }, script),
  ];
}

function colorTag(_fullMatch, tag, inner) {
  return h("span", { class: "color-tag", "data-tag": tag }, inner);
}

function colorKvp(_fullMatch, key, value) {
  if (!value) {
    return h("span", { class: "color-tag color-key" }, key);
  }
  return [
    h("span", { class: "color-tag color-key" }, key),
    u("text", ": "),
    h("span", { class: "color-tag color-value" }, value),
  ];
}

function colorGC(_fullMatch, q, t, b, m, k, units) {
  const out = [];
  const letters_and_values = [
    ["q", q],
    ["t", t],
    ["b", b],
    ["m", m],
    ["k", k],
  ];

  for (const [letter, value] of letters_and_values) {
    if (value) {
      out.push(h("span", { class: "color-tag color-gc-text" }, value));
      out.push(
        h(
          "span",
          { class: `color-tag color-gc-${letter}` },
          letter.toUpperCase(),
        ),
      );
    }
  }
  if (units) {
    out.push(h("span", { class: "color-tag color-gc-text" }, units));
  }
  out.push(h("span", { class: "color-tag color-gc-end" }, "GC"));

  return out;
}

function colorBlock(_fullMatch, content) {
  const stubNode = {
    type: "root",
    children: [
      {
        type: "text",
        value: content,
      },
    ],
  };
  findAndReplace(stubNode, [
    [regexColorTag, colorTag],
    [regexKvp, colorKvp],
    [regexScript, colorScript],
    [regexGC, colorGC],
  ]);
  return stubNode.children;
}

const autocolorPlugin = (_config) => {
  return (ast) => {
    visit(ast, "text", (node, _index, parent) => {
      // Docusaurus forces <code> elements with HTML children into full-width code
      // blocks, which breaks the DOM tree. Disallow coloring in <code> for now.
      if (regexAutocolorBlock.test(node.value) && parent.tagName != "code") {
        const stubNode = {
          type: "root",
          children: [node],
        };
        findAndReplace(stubNode, [regexAutocolorBlock, colorBlock]);
        parent.children.splice(
          parent.children.indexOf(node),
          1,
          ...stubNode.children,
        );
      }
    });
  };
};

export default autocolorPlugin;
