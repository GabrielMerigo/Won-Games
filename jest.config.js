module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "src/**/*.ts(x)?",
  //   "!src/**/stories.tsx",
  //   "!src/utils/apollo.ts",
  // ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
};
