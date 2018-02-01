const Server = require('./4_dir');
const fs = require('fs');

describe('test server: ', () => {
  test('Should return statusCode: ', (done) => {
    Server.inject('/foo/bar/baz/file.html', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the body: ', (done) => {
    const data = fs.readFileSync('/Users/vishalvasnani/MDL/training/makemehapi_Ex/Ex4/public/file.html');
    Server.inject('/foo/bar/baz/file.html', (response) => {
      expect(response.result.toString()).toBe(data.toString());
      done();
    });
  });
});

