const express = require("express");
const fs = require("fs");

const logger = require("./logger");
const error = require("./error");
const GLOBAL = require("./global");

const app = express();
const PORT = 8561; // If you change the port, make sure to also change it in the vite.config.js

let dataFoldersAdjusted = false;
const dataFolders = [
  GLOBAL.FOLDERS.DATA,
  GLOBAL.FOLDERS.LOGS,
  GLOBAL.FOLDERS.PRIVATE,
  GLOBAL.FOLDERS.USERS,
];

logger.info("Checking for missing data folders...");
for (let i = 0; i < dataFolders.length; i++) {
  if (!fs.existsSync(dataFolders[i])) {
    try {
      fs.mkdirSync(dataFolders[i]);
      logger.warn(
        {
          "Data folder": dataFolders[i],
          Note: "This folder is created automatically after first installing the budget tracker.",
        },
        "Creating missing data folder.",
      );
      dataFoldersAdjusted = true;
    } catch (err) {
      error(
        "Create missing data folders",
        "Failed to create data folder.",
        { "Data Folder": dataFolders[i] },
        err,
      );
    }
  }
}

if (!dataFoldersAdjusted) {
  logger.info("No missing data folders found.");
}

app.listen(PORT, () => {
  logger.info({ Port: PORT }, "Budget Tracker backend running.");
});
