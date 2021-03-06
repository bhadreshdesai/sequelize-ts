import config from "./config/environment";
import logger from "./utils/logger";
import server from "./server";
import database from "./models";

async function main() {
  database.logInfo();
  await server.listen({ port: config.PORT, host: config.HOST });
  logger.info(`Running at http://${config.HOST}:${config.PORT}`);
}

process.on("unhandledRejection", (err) => {
  if (err) {
    logger.error(err);
  }
  process.exit(1);
});

main();
