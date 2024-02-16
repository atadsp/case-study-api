import * as dotenv from "dotenv";
import http from "http";
import colors from "colors";

import log from "@log";
import { checkEnvironment } from "@utility";
import Router from "./router.class";

colors.enable();

process.on("uncaughtException", (error) => {
  log.error(error.stack);
});

dotenv.config();
const check = checkEnvironment();
if (check.env_check) {
  const app = Router.build();
  const server = http.createServer(app);
  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    log.info("It's working! It's working! ", PORT);
    log.jokes("Now THIS is podracing!");
  });
} else if (check.missing_envs.length > 0) {
  log.jokes("Somehow Palpatine returned...");
  log.error("ENV's are not set, please set them in the .env");
  log.error(
    "The following Environment Variables are not set:",
    check.missing_envs
  );
} else {
  log.jokes(
    "I'm afraid the shield generator will be quite operational when your friends arrive."
  );
  log.error(
    "Node version is incorrect! Current node version is",
    process.version,
    "Expected",
    process.env.NODE_VERSION
  );
}
