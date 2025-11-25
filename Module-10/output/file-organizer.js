const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "messy-files");
const organizedDir = path.join(__dirname, "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".epub"],
  videos: [".mp4", ".mkv", ".mov", ".wmv", ".flv"],
  audio: [".mp3", ".wav", ".aac", ".flac", ".m4a"],
  code: [".js", ".ts", ".jsx", ".tsx", ".html"],
  archives: [".zip", ".rar", ".7z", ".tar", ".gz"],
  spreadsheets: [".xls", ".xlsx", ".csv", ".ods"],
  others: [".iso", ".exe", ".apk", ".bat", ".bin"],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "script.js",
  "archive.zip",
  "profile.png",
  "data.xlsx",
  "video.mp4",
  "notes.txt",
];

function initializedDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
    });
  }
  console.log("Messy directories file are created");

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }

  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);

    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
}
// initializedDirectories();

function getCategory(filename) {
  const ext = path.extname(filename).toLocaleLowerCase();
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) return category;
  }
  return "others";
}

function organizeFiles() {
  console.log("file organizer \n");
  console.log("source: ", sourceDir);
  console.log("Destination: ", organizedDir);
  console.log("\n", "_".repeat(50), "\n");

  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log("No files to work on");
    return;
  }

  console.log(`found ${files.length} files to organize`);

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath); //Meta data check
    if (stat.isDirectory()) {
      return;
    }
    const category = getCategory(file);
    const desDir = path.join(organizedDir, category);
    const desPath = path.join(desDir, file);
    fs.copyFileSync(sourcePath, desPath);
    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
}

function showHelp() {
  console.log(`
    file organizer - usage:

    commands:
    init - create files
    organize - organize files into categories

    example:
    node file-organizer init
    node file-organizer organize
    `);
}

const command = process.argv[2];

switch (command) {
  case "init":
    initializedDirectories();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    showHelp();
    break;
}
