import {checkEnvironment} from "./utility";
const OLD_ENV = process.env;



describe("Test checkEnvironment", () => {
  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });

  test("no envs:", () => {
    process.env = {};
    const env_check = checkEnvironment();
    expect(env_check.env_check).toBe(false);
    expect(env_check.missing_envs.length).toBeGreaterThan(0);
  });

  test("envs:", () => {
    const env_check = checkEnvironment();
    expect(env_check.env_check).toBe(true);
    expect(env_check.missing_envs.length).toBe(0);
  });
});
