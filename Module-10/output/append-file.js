const fs = require("fs");

fs.writeFileSync("./output/app.log", "Application Started\n");
console.log("File Created");

const logEntry1 = `${new Date().toISOString()} user logged in\n`;
fs.appendFileSync("./output/app.log", logEntry1);

const logEntry2 = "I want to go to Mosque";
fs.appendFileSync("./output/app.log", logEntry2);
