const server = require('./api/server.js');

// make the port dynamic
const port = 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
