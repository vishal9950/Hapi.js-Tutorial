const Server = require('./5_views');

describe('test server: ', () => {
  test('Should return statusCode: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
