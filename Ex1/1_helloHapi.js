const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

const logger = (request, reply) => {
  reply('Hello hapi');
};

server.route({
  path: '/',
  method: 'GET',
  handler: logger,
});

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
