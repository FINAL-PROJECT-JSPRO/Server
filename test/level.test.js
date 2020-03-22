const request = require('supertest')
const app = require('../app')
const { Level, sequelize } = require('../models')
const { queryInterface } = sequelize

describe('level routes', () => {
    beforeEach((done) => {
        const promises = [
            Level.create({
                name: "Beginner"
            }),
            Level.create({
                name: "Intermediate"
            }),
            Level.create({
                name: "Advanced"
            })
        ]
        Promise.all(promises)
            .then(_ => {
                done()
            })
            .catch(err => done(err))
    })
    afterEach((done) => {
        queryInterface.bulkDelete('Levels', {})
            .then(_ => done())
            .catch(err => done(err))
    })

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