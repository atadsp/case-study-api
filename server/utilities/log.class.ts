/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import colors from "colors/safe";

const verbose = colors.blue;
const silly = colors.rainbow;
const info = colors.cyan;
const warn = colors.yellow;
const debug = colors.green;
const error = colors.red;

class Log {
  public formatted_value = "[CASE-STUDY-API] -";

  public log_level = process.env.LOG_LEVEL?.trim() || "debug";

  public default(message?: any, ...optionalParams: any[]) {
    // use console.log without frills
    const allowed_levels = ["verbose", "jokes", "joke", "silly"];
    if (allowed_levels.includes(this.log_level)) {
      console.log(message, ...optionalParams);
    }
  }

  public verbose(message?: any, ...optionalParams: any[]) {
    const allowed_levels = ["verbose", "jokes", "joke", "silly", "debug"];
    if (allowed_levels.includes(this.log_level)) {
      const params = this.color_params("verbose", ...optionalParams);
      console.log(
        verbose(`${this.formatted_value} [VERBOSE] -`),
        verbose(message),
        ...params
      );
    }
  }

  public debug(message?: any, ...optionalParams: any[]) {
    const allowed_levels = ["verbose", "jokes", "joke", "silly", "debug"];
    if (allowed_levels.includes(this.log_level)) {
      const params = this.color_params("debug", ...optionalParams);
      console.log(
        debug(`${this.formatted_value} [DEBUG] -`),
        debug(message),
        ...params
      );
    }
  }

  public info(message?: any, ...optionalParams: any[]) {
    const allowed_levels = [
      "verbose",
      "jokes",
      "joke",
      "silly",
      "debug",
      "info"
    ];
    if (allowed_levels.includes(this.log_level)) {
      const params = this.color_params("info", ...optionalParams);
      console.log(
        info(`${this.formatted_value} [INFO] -`),
        info(message),
        ...params
      );
    }
  }

  public warn(message?: any, ...optionalParams: any[]) {
    this.warning(message, ...optionalParams);
  }

  public warning(message?: any, ...optionalParams: any[]) {
    const allowed_levels = [
      "verbose",
      "jokes",
      "joke",
      "silly",
      "debug",
      "info",
      "warn",
      "warning"
    ];
    if (allowed_levels.includes(this.log_level)) {
      const params = this.color_params("warn", ...optionalParams);
      console.log(
        warn(`${this.formatted_value} [WARNING] -`),
        warn(message),
        ...params
      );
    }
  }

  public err(message?: any, ...optionalParams: any[]) {
    this.error(message, ...optionalParams);
  }

  public error(message?: any, ...optionalParams: any[]) {
    const allowed_levels = [
      "verbose",
      "jokes",
      "joke",
      "silly",
      "debug",
      "info",
      "warn",
      "warning",
      "err",
      "error"
    ];
    if (allowed_levels.includes(this.log_level)) {
      const params = this.color_params("error", ...optionalParams);
      console.error(
        error(`${this.formatted_value} [ERROR] -`),
        error(message),
        ...params
      );
    }
  }

  public jokes(message?: any, ...optionalParams: any[]) {
    const allowed_levels = ["jokes", "joke", "silly"];
    if (allowed_levels.includes(this.log_level)) {
      const params = this.color_params("joke", ...optionalParams);
      console.log(
        silly(`${this.formatted_value} [JOKE] -`),
        silly(message),
        ...params
      );
    }
  }

  private color_params(level: string, ...optionalParams: any[]) {
    const params = [] as any[];
    optionalParams.forEach((val) => {
      switch (level) {
        case "verbose":
          params.push(verbose(val));
          break;

        case "debug":
          params.push(debug(val));
          break;

        case "info":
          params.push(info(val));
          break;

        case "warn":
        case "warning":
          params.push(warn(val));
          break;

        case "err":
        case "error":
          params.push(error(val));
          break;

        case "joke":
        case "jokes":
        case "silly":
          // silly color needs to be stringified because it uses a split function that breaks with non-string objects
          params.push(silly(JSON.stringify(val)));
          break;

        default:
          params.push(val);
      }
    });
    return params;
  }
}

export default new Log();
