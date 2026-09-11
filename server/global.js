// Global server variables
const path = require("path");

// Folders
const ROOT_FOLDER = path.join(__dirname, "../");
const SERVER_FOLDER = path.join(ROOT_FOLDER, "server");
const ROUTES_FOLDER = path.join(SERVER_FOLDER, "routes");
const DATA_FOLDER = path.join(ROOT_FOLDER, "data");
const LOGS_FOLDER = path.join(ROOT_FOLDER, "logs");
const PRIVATE_FOLDER = path.join(DATA_FOLDER, "private");
const USERS_FOLDER = path.join(DATA_FOLDER, "users");
// Server Routes
const USERS_ROUTE = path.join(ROUTES_FOLDER, "users.routes.js");

const GLOBAL = {
  ROOT_FOLDER: ROOT_FOLDER,
  DATA_FOLDER: DATA_FOLDER,
  LOGS_FOLDER: LOGS_FOLDER,
  PRIVATE_FOLDER: PRIVATE_FOLDER,
  USERS_FOLDER: USERS_FOLDER,
};

module.exports = GLOBAL;
