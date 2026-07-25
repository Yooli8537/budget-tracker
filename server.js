const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 8561; // If you change the port, make sure to also change it in the vite.config.js

let dataFolderAdjusted = false;

const dataFolder = path.join(__dirname, "public/data");

const expensesFile = path.join(dataFolder, "expenses.json");
const incomesFile = path.join(dataFolder, "incomes.json");
const savingsFile = path.join(dataFolder, "savings.json");
const categoriesFile = path.join(dataFolder, "categories.json");

const dataFiles = [expensesFile, incomesFile, savingsFile, categoriesFile];

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.warn("Created missing Data Folder.");
  dataFolderAdjusted = true;
}

for (let i = 0; i < dataFiles.length; i++) {
  if (!fs.existsSync(dataFiles[i])) {
    fs.writeFileSync(dataFiles[i], "[]");
    console.warn(`Created missing .json file at ${dataFiles[i]}.`);
    dataFolderAdjusted = true;
  }
}

if (dataFolderAdjusted) {
  console.warn(
    "Adjustments to the Data folder were made. Visit the Server logs for more info.",
  );
  console.log(
    "This is standard if you've freshly cloned the Repository, as the data folder and its contents are ignored by git.",
  );
} else {
  console.log(
    "No adjustments made to the Data folder. Running Backend normally.",
  );
}

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
