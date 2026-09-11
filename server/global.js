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
  PATHS: {
    FOLDERS: {
      ROOT: ROOT_FOLDER,
      SERVER: SERVER_FOLDER,
      ROUTES: ROUTES_FOLDER,
      DATA: DATA_FOLDER,
      LOGS: LOGS_FOLDER,
      PRIVATE: PRIVATE_FOLDER,
      USERS: USERS_FOLDER,
    },
    ROUTES: {
      USERS: USERS_ROUTE,
    },
  },
};

module.exports = GLOBAL;
