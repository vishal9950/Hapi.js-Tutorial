const Hapi = require('hapi');
const Inert = require('inert');
// const Path = require('path');
// const fs = require('fs');

const server = new Hapi.Server();

server.register(Inert, (err) => {
  if (err) { throw err; }
});

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

const handler = (req, reply) => {
  reply.file('./Ex3/index.html');
};

server.route({
  path: '/',
  method: 'GET',
  handler,
  // {
  //   file: 'index.html',
  // },
});

if (!module.parent) {
  server.start(() => {
    console.log('Server created on:', server.info.uri);
  });
}

module.exports = server;
