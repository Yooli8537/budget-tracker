// Global server variables
const path = require("path");

const ROOT_FOLDER = path.join(__dirname, "../");
const DATA_FOLDER = path.join(ROOT_FOLDER, "data");
const LOGS_FOLDER = path.join(ROOT_FOLDER, "logs");
const PRIVATE_FOLDER = path.join(DATA_FOLDER, "private");
const USERS_FOLDER = path.join(DATA_FOLDER, "users");

const GLOBAL = {
  ROOT_FOLDER: ROOT_FOLDER,
  DATA_FOLDER: DATA_FOLDER,
  LOGS_FOLDER: LOGS_FOLDER,
  PRIVATE_FOLDER: PRIVATE_FOLDER,
  USERS_FOLDER: USERS_FOLDER,
};

module.exports = GLOBAL;
