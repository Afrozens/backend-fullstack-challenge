const request = require('supertest')
const app = require('../app')
const dataPizzaMock = require('../stub/stub-data-pizza.json')

jest.mock('../stub/stub-data-pizza.json')

afterEach(() => {
    jest.resetModules();
});

describe('GET /pizzas', () => {
    it('should return list of pizzas', async () => {
        const result = await request(app)
            .get('/api/pizzas')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(result.body).toEqual({ data: dataPizzaMock })
    })
})