'use strict';

const app = require('./../src/server');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing our app', () => {
  test('Should respond with an array of messages on GET /', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  test('Should respond with a single of a message on GET /person', async () => {
    const response = await request.get('/person?name=brooke');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({'id': 1, 'name': 'Brooke'});
  });

  test('Should respond with a 404 not found message', async () => {
    const response = await request.get('/no');
    expect(response.status).toEqual(404);
  });
});