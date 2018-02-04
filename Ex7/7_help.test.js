const Server = require('./7_help');
const fs = require('fs');
const helper = require('./helpers/helper');

describe('Test server: ', () => {
  test('Should return statusCode 200: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return response ', (done) => {
    const data = fs.readFileSync('./Ex7/templates/testFile.html');
    Server.inject('/?name=abcd&suffix=!', (response) => {
      expect(response.result.toString()).toBe(data.toString());
      done();
    });
  });
});

describe('Test helpers: ', () => {
  test('Should return a string with name and suffix concatnated: ', () => {
    const context = {
      data: {
        root: {
          name: 'xyz',
          suffix: 'abc',
        },
      },
    };
    expect(helper(context)).toBe('xyzabc');
  });
});
