const request = require('supertest');
const app = require('../app');

describe('POST /users', () => {
  it('responds with 201 Created', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        first_name: 'Ken',
        last_name: 'Jones',
        email: 'ken.jones@email.com',
        password: 'pass123',
        confirm_password: 'pass123',
      });
    expect(res.statusCode).toEqual(201);
  });
});