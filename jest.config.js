/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "node",
  /**
   * a file is a test file if:
   * - it is within /src
   * - and it is within __tests__ or ends with spec.<ext> or test.<ext>
   * - and ends with <ext> which is one of: js, jsx, ts, tsx, mjs
   *
   * verify: https://www.digitalocean.com/community/tools/glob?comments=true&glob=%7B%2Fsrc%2F%2A%2A%2F__tests__%2F%2A%2A%2F%2A.%7B%5Bjt%5Ds%3F%28x%29%2Cmjs%7D%2C%2Fsrc%2F%2A%2A%2F%2A%28%2A.%29%2B%28spec%7Ctest%29.%7B%5Bjt%5Ds%3F%28x%29%2Cmjs%7D%7D&matches=false&tests=%2F%2F%201.%20must%20be%20within%20%2Fsrc%20%28top%20level%29&tests=%2Fsrc%2Ffile.test.js&tests=%2F__tests__%2Fsrc%2Ffile.test.js&tests=%2Ffile.test.js&tests=%2F%2F%202.%20within%20__tests__%20or%20ends%20with%20test%2Fspec&tests=%2Fsrc%2F__tests__%2Ffile.js&tests=%2Fsrc%2Ffile.test.js&tests=%2Fsrc%2Ffile.spec.js&tests=%2Fsrc%2Ffile.js&tests=%2F%2F%202.1.%20nested%20directories%20are%20ok&tests=%2Fsrc%2Fdir%2Fdir%2F__tests__%2Fdir%2Fdir%2Ffile.js&tests=%2Fsrc%2Fdir%2Fdir%2Ffile.test.js&tests=%2F%2F%202.2.%20using%20just%20test%20or%20spec%20is%20ok&tests=%2Fsrc%2Ftest.js&tests=%2Fsrc%2Fspec.js&tests=%2F%2F%203.%20has%20extension%3A%20js%2C%20jsx%2C%20ts%2C%20tsx%2C%20or%20mjs&tests=%2Fsrc%2Ffile.test.js&tests=%2Fsrc%2Ffile.test.jsx&tests=%2Fsrc%2Ffile.test.ts&tests=%2Fsrc%2Ffile.test.tsx&tests=%2Fsrc%2Ffile.test.mjs&tests=%2Fsrc%2Ffile.test.cjs
   */
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{[jt]s?(x),mjs}",
    "<rootDir>/src/**/*(*.)+(spec|test).{[jt]s?(x),mjs}",
  ],
};
