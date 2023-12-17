# Contributing

This document builds on the [default contributing.md](https://github.com/comcode-org/.github/blob/main/CONTRIBUTING.md). Please read that before this document.

## How to create an article

## How to review an article PR

Article PRs should be reviewed using the [PR review process here](https://github.com/comcode-org/.github/blob/main/CONTRIBUTING.md#reviewing-pull-requests). Additionally, `Correct` content changes must adhere to the [content guide](https://github.com/comcode-org/hackmud_wiki?tab=readme-ov-file#content-guide).

## How to make changes to code

### Creating tests

1. For some module `foo.ts`, create a file `foo.test.ts` in the same directory.
   - Tests must be within `/src`.
   - `.tsx` `.mjs` `.jsx` and `.js` are also valid extensions.
2. Import required jest utils from `@jest/globals`, and the module to be tested.
3. Use `describe` to log what code is being tested and use `it` to describe a specification of the module.

```ts
/** @file criticalMathModule.test.ts */
import { describe, expect, it } from "@jest/globals";
import { isEven } from "./criticalMathModule";

describe("criticalMathModule", () => {
  // read as: it checks if numbers are even
  it("checks if numbers are even", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(4)).toBe(true);
  });
});
```

## How to review a code change

[Use the standard review process](https://github.com/comcode-org/.github/blob/main/CONTRIBUTING.md#reviewing-pull-requests).
