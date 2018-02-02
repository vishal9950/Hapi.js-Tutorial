const Server = require('./8_streams');

describe('Test server: ', () => {
  test('Status Code: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
