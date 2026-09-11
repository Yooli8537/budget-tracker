const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Database = require("better-sqlite3");

const logger = require("../logger");
const error = require("../error");
const GLOBAL = require("../global");

// Initializing the users database to read & write from.
const usersDB = new Database(GLOBAL.PATHS.DATABASES.USERS);
const usersDBSQL = fs.readFileSync(GLOBAL.PATHS.FILES.USERS_DB_SQL, "utf-8");
usersDB.exec(usersDBSQL);

function createSalt(length) {
  return crypto.randomBytes(length).toString("hex");
}

crypto.scrypt("999", createSalt(17), 117, (err, derivedKey) => {
  if (err) {
    error("Create hashword", "Failed to create hasword.", {}, err);
  }
});

module.exports = router;
