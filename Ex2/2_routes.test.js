const Server = require('./2_routes');

describe('test server: ', () => {
  test('Should return the response code: ', (done) => {
    Server.inject('/xyz', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the payload: ', (done) => {
    Server.inject('/xyz', (response) => {
      expect(response.payload).toBe('Hello xyz');
      done();
    });
  });
});

