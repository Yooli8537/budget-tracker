const express = require("express");
const router = express.Router();
const crypto = require("crypto");

const logger = require("../logger");
const error = require("../error");
const GLOBAL = require("../global");

crypto.scrypt("999", "999", 117, (err, derivedKey) => {
  if (err) {
    error("Create hashword", "Failed to create hasword.", {}, err);
  }
  logger.info(derivedKey.toString("hex"));
});

module.exports = router;
