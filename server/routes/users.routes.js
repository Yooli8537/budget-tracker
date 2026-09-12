const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");
const { promisify } = require("util");
const scryptAsync = promisify(crypto.scrypt);
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

async function createHashword(password) {
  const rawHash = await scryptAsync(password, createSalt(17), 117);
  return rawHash.toString("hex");
}

router.post("/api/users/createUser", async (req, res) => {
  const { password, username, isAdmin } = req.body;
  logger.info({ Password: password, Username: username });
  res.json({ success: true });
});

router.post("/api/users/login", async (req, res) => {
  const { password, username } = req.body;
  logger.info({ Password: password, Username: username });
  res.json({ success: true });
});

module.exports = router;
