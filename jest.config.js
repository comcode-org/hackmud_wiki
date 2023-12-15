/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.{[jt]s?(x),mjs}",
    "**/*(*.)+(spec|test).{[jt]s?(x),mjs}",
  ],
};
