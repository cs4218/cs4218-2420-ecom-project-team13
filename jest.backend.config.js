export default {
  // display name
  displayName: "backend",

  // when testing backend
  testEnvironment: "node",

  // which test to run
  testMatch: ["<rootDir>/config/*.test.js"],

  // configure dotenv file
  setupFiles: ["dotenv/config"],

  // jest code coverage
  collectCoverage: true,
  collectCoverageFrom: ["config/**"],
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 100,
    },
  },
};
