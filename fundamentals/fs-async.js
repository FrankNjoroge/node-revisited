const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    return err;
  }
  const first = data;

  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      return err;
    }
    const second = data;

    writeFile(
      "./content/result-async.txt",
      `here is the result: ${first}, ${second}`,
      (err, data) => {
        if (err) {
          return err;
        }
        console.log("done with the task");
      }
    );
  });
});

console.log("starting next one");
