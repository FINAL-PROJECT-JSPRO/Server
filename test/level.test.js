const request = require('supertest')
const app = require('../app')
const { Level, sequelize } = require('../models')
const { queryInterface } = sequelize

describe('level routes', () => {
    describe('get all levels', () => {
        test('return message and data levels from database', (done) => {
            request(app)
                .get('/levels')
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Array))
                    done()
                })
        })
    })
})