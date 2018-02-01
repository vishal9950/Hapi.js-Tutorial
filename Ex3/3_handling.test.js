const Server = require('./3_handling');
const fs = require('fs');

describe('test server: ', () => {
  test('status code: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

