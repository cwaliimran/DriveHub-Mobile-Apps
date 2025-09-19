const fs = require("fs");
const path = require("path");

function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (file.endsWith(".js")) {
      files.push(fullPath);
    }
  });
  return files;
}

const allFiles = getFiles("src"); // or your project folder
let output = "";

allFiles.forEach(f => {
  output += `\n// ==== ${f} ====\n`;
  output += fs.readFileSync(f, "utf8");
});

fs.writeFileSync("all_code.txt", output);
console.log("✅ Combined into all_code.js");
