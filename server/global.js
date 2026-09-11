// Global server variables
const path = require("path");

// Paths
// Folders
const ROOT_FOLDER = path.join(__dirname, "../");
const LOGS_FOLDER = path.join(ROOT_FOLDER, "logs");
const SQL_FOLDER = path.join(ROOT_FOLDER, "sql");
const SERVER_FOLDER = path.join(ROOT_FOLDER, "server");
const ROUTES_FOLDER = path.join(SERVER_FOLDER, "routes");
const DATA_FOLDER = path.join(ROOT_FOLDER, "data");
const PRIVATE_FOLDER = path.join(DATA_FOLDER, "private");
const USERS_FOLDER = path.join(DATA_FOLDER, "users");
// Server Routes
const USERS_ROUTE = path.join(ROUTES_FOLDER, "users.routes.js");
// Databases (files as well)
const USERS_DATABASE = path.join(PRIVATE_FOLDER, "users.db");
// Files
const SERVER_SETTINGS = path.join(PRIVATE_FOLDER, "server.json");
const USERS_DB_SQL = path.join(SQL_FOLDER, "users.sql");
const USER_DATA_SQL = path.join(SQL_FOLDER, "perUserDatabase.sql");

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
    DATABASES: {
      USERS: USERS_DATABASE,
    },
    FILES: {
      SERVER_SETTINGS: SERVER_SETTINGS,
      USERS_DB_SQL: USERS_DB_SQL,
      USER_DATA_SQL: USER_DATA_SQL,
    },
  },
};

module.exports = GLOBAL;
