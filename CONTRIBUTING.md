# Contributing

This document builds on the [default contributing.md](https://github.com/comcode-org/.github/blob/main/CONTRIBUTING.md). Please read that before this document.

## How to create an article

## How to review an article PR

Article PRs should be reviewed using the [PR review process here](https://github.com/comcode-org/.github/blob/main/CONTRIBUTING.md#reviewing-pull-requests). Additionally, `Correct` content changes must adhere to the [content guide](https://github.com/comcode-org/hackmud_wiki?tab=readme-ov-file#content-guide).

## How to make changes to code

### Creating tests

1. For some module `foo.js`, create a file `foo.test.js` in the same directory.

   - `.ts` / `.mjs` / `.js` are all valid extensions.
   - `.tsx` / `.jsx` are permitted, though unless the XML syntax is necessary, use `.ts` / `.mjs` instead.
   - Tests must be within `/src`.

2. Import the module to be tested.

   - For TypeScript, Jest utilities are not in global scope, so you will need to import these from `@jest/globals`.

3. Use Jest's [`expect`](https://jestjs.io/docs/expect), [`it`](https://jestjs.io/docs/api#testname-fn-timeout) and [`describe`](https://jestjs.io/docs/api#describename-fn) to organise and assert the behaviour of the module. A test name should start with a verb, and descriptions should be used to indicate what component is being tested.

```ts
/** @file criticalMathModule.test.ts */
import { describe, expect, it } from "@jest/globals"; // only needed for TypeScript
import { isEven, log2 } from "./criticalMathModule";

describe("isEven", () => {
  it("checks if numbers are even", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(4)).toBe(true);
  });
});

describe("log2", () => {
  it("returns the base-2 logarithm of a number", () => {
    expect(log2(1024)).toBeCloseTo(10);
  });

  it("throws an error for non-positive numbers", () => {
    expect(log2(0)).toThrow();
    expect(log2(-1)).toThrow();
  });
});
```

## How to review a code change

[Use the standard review process](https://github.com/comcode-org/.github/blob/main/CONTRIBUTING.md#reviewing-pull-requests).
