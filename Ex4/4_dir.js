const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();

server.register(Inert, (err) => {
  if (err) { throw err; }
});

server.connection({
  host: 'localhost',
  port: 8080,
});

// const logger = (request, reply) => {
//   reply(request.params.fileName);
// };

server.route({
  path: '/foo/bar/baz/{fileName}',
  method: 'GET',
  handler: {
    // logger,
    directory: {
      path: '/Users/vishalvasnani/MDL/training/makemehapi_Ex/Ex4/public',
    },
  },
});

if (!module.parent) {
  server.start(() => {
    console.log('Server created at:', server.info.uri);
  });
}

module.exports = server;
