const request = require('supertest')
const app = require('../app')
const { Level, sequelize } = require('../models')
const { queryInterface } = sequelize

describe('subject routes', () => {
    test('test get all subject', (done) => {
        request(app)
            .get('/subjects')
            .end((err, response) => {
                expect(err).toBe(null)
                expect(response.body).toStrictEqual(expect.any(Array))
                done()
            })
    })

    test('test get on subjects', (done) => {
        request(app)
            .get('/subjects/1')
            .end((err, response) => {
                expect(err).toBe(null)
                expect(response.body).toStrictEqual(expect.any(Object))
                done()
            })
    })
    
})