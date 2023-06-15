const path = require("path");

// console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");

const basename = path.basename(filePath);
// console.log(basename);

const absolute = path.resolve(__dirname, "content", "sub", "test.txt");

console.log(absolute);
