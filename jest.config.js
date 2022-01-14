const swcConfigs = {
  module: {
    type: "commonjs",
  },
};

module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", swcConfigs],
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest-setup.ts"],
};
