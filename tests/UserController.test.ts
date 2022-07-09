import request from 'supertest';
import app from '../src/index';

describe('test add function', () => {
    it('should start with four users', async () => {
        const response = await request(app).get('/users');
        expect(response.body.users).toHaveLength(4);

    });
});