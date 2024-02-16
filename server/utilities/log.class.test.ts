import log from "./log.class";
import colors from "colors/safe"

const silly = colors.rainbow;
const verbose = colors.blue;
const info = colors.cyan;
const warn = colors.yellow;
const debug = colors.green;
const error = colors.red;


describe("Test Logging", () => {
  beforeEach(() => {
    console.error = jest.fn();
    console.log = jest.fn();
  });

  test("joke:", () => {
    const old_level = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = "jokes"
    log.jokes("test");
    expect(console.log).toHaveBeenCalledWith(silly('[CASE-STUDY-API] - [JOKE] -'), silly("test"));
    expect(console.error).toHaveBeenCalledTimes(0);
    process.env.LOG_LEVEL = old_level;
  });

  test("verbose:", () => {
    const old_level = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = "verbose"
    log.verbose("test");
    expect(console.log).toHaveBeenCalledWith(verbose('[CASE-STUDY-API] - [VERBOSE] -'), verbose("test"));
    expect(console.error).toHaveBeenCalledTimes(0);
    process.env.LOG_LEVEL = old_level;
  });

  test("debug:", () => {
    const old_level = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = "debug"
    log.debug("test");
    expect(console.log).toHaveBeenCalledWith(debug('[CASE-STUDY-API] - [DEBUG] -'), debug("test"));
    expect(console.error).toHaveBeenCalledTimes(0);
    process.env.LOG_LEVEL = old_level;
  });

  test("info:", () => {
    const old_level = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = "info"
    log.info("test");
    expect(console.log).toHaveBeenCalledWith(info('[CASE-STUDY-API] - [INFO] -'), info("test"));
    expect(console.error).toHaveBeenCalledTimes(0);
    process.env.LOG_LEVEL = old_level;
  });

  test("warn:", () => {
    const old_level = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = "warn"
    log.warning("test");
    expect(console.log).toHaveBeenCalledWith(warn('[CASE-STUDY-API] - [WARNING] -'), warn("test"));
    expect(console.error).toHaveBeenCalledTimes(0);
    process.env.LOG_LEVEL = old_level;
  });

  test("error:", () => {
    const old_level = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = "error"
    log.error("test");
    expect(console.error).toHaveBeenCalledWith(error('[CASE-STUDY-API] - [ERROR] -'), error("test"));
    expect(console.log).toHaveBeenCalledTimes(0);
    process.env.LOG_LEVEL = old_level;
  });
});