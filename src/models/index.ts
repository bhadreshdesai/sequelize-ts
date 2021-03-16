import * as fs from "fs";
import * as path from "path";
import logger from "../utils/logger";
import { Sequelize } from "sequelize";

class Database {
  private _basename!: string;
  private _sequelize!: Sequelize;
  constructor() {
    logger.info("Logging from database constructor");
    this._basename = path.basename(module.filename);
    this._sequelize = new Sequelize("sqlite::memory:");
  }

  loadModels() {
    fs.readdirSync(__dirname)
      .filter((file: string) => {
        return file !== this._basename;
      })
      .forEach((file: string) => {
        let model = require(path.join(__dirname, file)).default;
        if (typeof model.initModel === "function") {
          model.initModel(this._sequelize);
          logger.info(`Filename: ${file}, ModelName: ${model.name}`);
        }
      });
  }

  logInfo() {
    logger.info("Logging from database");
    logger.info(`Database module basename ${this._basename}`);
    logger.info(`Sequelize ${this._sequelize}`);
    this.loadModels();
  }
}

const database = new Database();
export default database;
