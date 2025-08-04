const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from CI/CD pipeline!');
}).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
