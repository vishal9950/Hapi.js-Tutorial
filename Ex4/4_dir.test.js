const Server = require('./4_dir');

describe('test server: ', () => {
  test('Should return statusCode: ', (done) => {
    Server.inject('/foo/bar/baz/file.html', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

