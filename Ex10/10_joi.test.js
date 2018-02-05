const Server = require('./10_joi');

describe('Test server: ', () => {
  test('Should return statusCode: ', (done) => {
    const options = {
      url: '/login',
      payload: JSON.stringify({ isGuest: true, password: 'fg' }),
      method: 'POST',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return result: ', (done) => {
    const options = {
      url: '/login',
      payload: JSON.stringify({ isGuest: true, password: 'fg' }),
      method: 'POST',
    };
    Server.inject(options, (response) => {
      expect(response.result).toBe('login successful');
      done();
    });
  });
});
