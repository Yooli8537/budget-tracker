const express = require("express");
const fs = require("fs");

const logger = require("./logger");
const error = require("./error");
const GLOBAL = require("./global");

const app = express();
const port = 8561; // If you change the port, make sure to also change it in the vite.config.js

let dataFolderAdjusted = false;

const dataFolders = [
  GLOBAL.DATA_FOLDER,
  GLOBAL.LOGS_FOLDER,
  GLOBAL.PRIVATE_FOLDER,
  GLOBAL.USERS_FOLDER,
];

for (let i = 0; i < dataFolders.length; i++) {
  if (!fs.existsSync(dataFolders[i])) {
    try {
      fs.mkdirSync(dataFolders[i]);
      logger.info(
        { "Data folder": dataFolders[i] },
        "Creating missing data folder.",
      );
      dataFolderAdjusted = true;
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

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
