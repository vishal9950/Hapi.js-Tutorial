const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

const handler = (request, reply) => {
  reply(request.params.breed);
};

const routeConfig = {
  path: '/chicken/{breed}',
  method: 'GET',
  handler,
  config: {
    validate: {
      params: {
        breed: Joi.string().required(),
      },
    },
  },
};

server.route(routeConfig);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server created on: ', server.info.uri);
  });
}

module.exports = server;
