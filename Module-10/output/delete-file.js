const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");

if (fs.existsSync("./output/temp.txt")) {
  console.log("File exists");
  fs.unlinkSync("./output/temp.txt");
  console.log("File Deleted");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (err) {
  console.error(err.message);
}

fs.writeFile("./output/temp.txt", "Async file", (err) => {
  if (err) return console.log(err.message);

  fs.unlink("./output/temp.txt", (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("file deleted");
    }
  });
});
