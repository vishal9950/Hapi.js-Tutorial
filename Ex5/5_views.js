const Vision = require('vision');
const Hapi = require('hapi');
const handlebar = require('handlebars');

const server = new Hapi.Server();

server.register(Vision, (err) => {
  if (err) throw err;
});
server.connection({
  host: 'localhost',
  //   port: Number(process.argv[2] || 8080),
  port: 8080,
});
server.views({
  engines: {
    html: handlebar,
  },
  path: '/Users/vishalvasnani/MDL/training/makemehapi_Ex/Ex5/templates',
});
server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});

if (!module.parents) {
  server.start(() => {
    console.log('Server created at:', server.info.uri);
  });
}

module.exports = server;
