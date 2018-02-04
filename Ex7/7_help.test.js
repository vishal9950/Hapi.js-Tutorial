const Server = require('./7_help');

describe('Test server: ', () => {
  test('Should return statusCode 200: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

