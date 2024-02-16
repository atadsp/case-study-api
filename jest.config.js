const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions: { paths: tsconfigPaths } } = require('./tsconfig')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  maxWorkers: 2,

  collectCoverage: true,
  collectCoverageFrom: ["server/**/*.ts"],
  modulePathIgnorePatterns:["server/utilities/interfaces", ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    "global": {
      "lines": 25,
      "statements": 25
    }
  },

  testPathIgnorePatterns: [
    "/node_modules/",
  ],

  moduleDirectories: [
    "node_modules",
    __dirname
  ],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      tsconfigPaths,
    ),
  }
};