const request = require('supertest')
const app = require('../app')
const { User, Subject, sequelize } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')
const Redis = require('ioredis')
const redis = new Redis()

let token
let id_user

describe('subject routes', () => {
    beforeEach((done) => {
        User.create({
            username: 'edytansil',
            email: 'edytansil@mail.com',
            password: "inipassword"
        })
            .then(user => {
                token = sign({
                    id: user.id,
                    email: user.email
                })
                id_user = user.id
                done()
            })
            .catch(err => done(err))
    })

    afterEach((done) => {
        queryInterface.bulkDelete('Users', {})
            .then(_ => done())
            .catch(err => done(err))
    })

    describe('Get all subjects (without redis)', () => {
        redis.del('services')
        test('return Array and status', (done) => {
            request(app)
                .get('/subjects')
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Array))
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })

    describe('Get all subjects (with redis)', () => {
        test('return Array and status', (done) => {
            request(app)
                .get('/subjects')
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Array))
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })
})