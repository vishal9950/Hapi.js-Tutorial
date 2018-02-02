const Server = require('./9_validate');

describe('test status code: ', () => {
  test('should return 200 status code: ', (done) => {
    Server.inject('http://localhost:8080/chicken/breed=indian', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

