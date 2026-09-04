const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 8561; // If you change the port, make sure to also change it in the vite.config.js

let dataFolderAdjusted = false;

const dataFolder = path.join(__dirname, "data");
const logsFolder = path.join(__dirname, "logs");
const privateFolder = path.join(dataFolder, "private");
const publicFolder = path.join(dataFolder, "public");

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
