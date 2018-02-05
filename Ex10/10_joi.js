const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  //   port: Number(process.argv[2] || 8080),
  port: 8080,
});

const handler = (request, reply) => {
  reply('login successful');
};

server.route({
  path: '/login',
  method: 'POST',
  handler,
  config: {
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string()
          .when('isGuest', {
            is: false,
            then: Joi.required(),
          }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
      })
        .options({ allowUnknown: true })
        .without('password', 'accessToken'),
    },
  },
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
