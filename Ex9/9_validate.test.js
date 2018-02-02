const Server = require('./9_validate');

describe('test status code: ', () => {
  test('should return 200 status code: ', (done) => {
    Server.inject('http://localhost:8080/chicken/indian', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('should return result indian: ', (done) => {
    Server.inject('http://localhost:8080/chicken/indian', (response) => {
      expect(response.result).toBe('indian');
      done();
    });
  });

  test('should not work for if no such path: ', (done) => {
    Server.inject('http://localhost:8080/chicken', (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});

