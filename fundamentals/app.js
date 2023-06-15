const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
  res.end(`
  <h1>Oops !</h1>
  <p>we cannot find the page youre looking for</p>
  <a href="/">Back home</a>`);
});

server.listen(5000);
