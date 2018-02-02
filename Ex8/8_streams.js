const Hapi = require('hapi');
const rot13 = require('rot13-transform');
const fs = require('fs');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

const handler = (request, reply) => {
  const data = fs.createReadStream('/Users/vishalvasnani/MDL/training/makemehapi_Ex/Ex8/file.txt').pipe(rot13());
  reply(data);
};

server.route({
  path: '/',
  method: 'GET',
  handler,
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server created on: ', server.info.uri);
  });
}

module.exports = server;
