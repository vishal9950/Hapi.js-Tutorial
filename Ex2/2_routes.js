const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

const handler = (request, reply) => {
  // reply(request.params.name);
  reply(`Hello ${request.params.name}`);
};

// const name = 'McK';

server.route({
  path: '/{name}',
  method: 'GET',
  handler,
});

if (!module.parent) {
  server.start(() => {
    console.log('Server started at:', server.info.uri);
  });
}

module.exports = server;
