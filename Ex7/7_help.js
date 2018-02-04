const Hapi = require('hapi');
const Vision = require('vision');
const handlebar = require('handlebars');

const server = new Hapi.Server();

server.register(Vision, (err) => {
  if (err) {
    throw err;
  }
});

server.connection({
  host: 'localhost',
  // port: Number(process.argv[2] || 8080),
  port: 8080,
});

const handler = (request, reply) => {
  reply.view('index', request.query);
};

server.route({
  path: '/',
  method: 'GET',
  handler,
});

server.views({
  engines: {
    html: handlebar,
  },
  path: './Ex7/templates',
  helpersPath: './Ex7/helpers',
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server created at: ', server.info.uri);
  });
}

module.exports = server;

