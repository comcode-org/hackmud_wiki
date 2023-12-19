/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "node",
  // tests must be within /src, with .spec or .test before file extension
  testMatch: ["<rootDir>/src/**/*(*.)+(spec|test).{[jt]s?(x),mjs}"],
};
