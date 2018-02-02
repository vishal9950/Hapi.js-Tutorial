const Server = require('./5_views');
const fs = require('fs');
// const path = require('path');

describe('test server: ', () => {
  test('Should return statusCode: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return result: ', (done) => {
    // Server.path(__dirname);
    const data = fs.readFileSync('./Ex5/templates/index.html');
    Server.inject('/', (response) => {
      expect(response.result.toString()).toBe(data.toString());
      done();
    });
  });
});
