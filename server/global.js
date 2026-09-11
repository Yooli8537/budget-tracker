// Global server variables
const path = require("path");

const DATA_FOLDER = path.join(__dirname, "data");
const LOGS_FOLDER = path.join(__dirname, "logs");
const PRIVATE_FOLDER = path.join(DATA_FOLDER, "private");
const USERS_FOLDER = path.join(DATA_FOLDER, "users");

const GLOBAL = {
  DATA_FOLDER: DATA_FOLDER,
  LOGS_FOLDER: LOGS_FOLDER,
  PRIVATE_FOLDER: PRIVATE_FOLDER,
  USERS_FOLDER: USERS_FOLDER,
};

module.exports = GLOBAL;
