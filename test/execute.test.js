const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

describe('test for execute code', () => {
    test('it should return status 200 and result from execute code', (done) => {
        request(app)
            .post('/execute/sandbox')
            .send({
                code: `function test (str) {
                    return str
                  }
                  test('percobaan')`
            })
            .end((err, response) => {
                expect(err).toBe(null)
                expect(response.body).toHaveProperty('success', expect.any(String))
                expect(response.body).toHaveProperty('error', expect.any(Object))
                expect(response.status).toBe(200)
                done()
            })
    })
})