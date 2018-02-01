const Server = require('./1_helloHapi');


describe('Test server: ', () => {
  test('Should return response code 200: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the response back: ', (done) => {
    Server.inject('/', (response) => {
      expect(response.payload).toBe('Hello hapi');
      done();
    });
  });
});
