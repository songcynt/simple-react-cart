const request = require('supertest');
const app = require('../../server/server');
const { getCategories, getData } = require('../../server/data');

test('GET /api/category', async () => {
    const res = await request(app).get('/api/category')
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(getCategories())
});

describe('GET /api/category/:name', () => {
    test('chineseGreenTea', async () => {
        const res = await request(app).get('/api/category/chineseGreenTea')
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(getData("chineseGreenTea"))
    });
    
    test('indianTea', async () => {
        const res = await request(app).get('/api/category/indianTea')
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(getData("indianTea"))
    });

    test('japaneseGreenTea', async () => {
        const res = await request(app).get('/api/category/japaneseGreenTea')
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(getData("japaneseGreenTea"))
    });

    test('incorrect category', async () => {
        const res = await request(app).get('/api/category/incorrect-category')
        expect(res.statusCode).toBe(500);
    })
})