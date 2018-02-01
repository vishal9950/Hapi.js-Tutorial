const Server = require('./3_handling');
const fs = require('fs');

describe('test server: ', () => {
  test('status code: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('result: ', (done) => {
    const indexFile = fs.readFileSync('./Ex3/index.html');
    const data = indexFile.toString();
    Server.inject('/', (response) => {
      expect(response.result.toString()).toBe(data);
      done();
    });
  });
});

