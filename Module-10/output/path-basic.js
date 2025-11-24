const path = require("path");

console.log("Current File Info: \n");
console.log("filename: ", __filename);
console.log("directory: ", __dirname);

console.log("\n", "_".repeat(60), "\n");
const filePath = "/mizan/documents/nextLevel.pdf";
console.log("Analyzing Path: ", filePath, "\n");

console.log("Directory: ", path.dirname(filePath));
console.log("Base Name: ", path.basename(filePath));
console.log("File Extension: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n", "_".repeat(60), "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("Formatted path: ", path.format(parsed));
