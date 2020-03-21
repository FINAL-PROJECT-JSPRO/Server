const request = require('supertest')
const app = require('../app')
const { User, sequelize } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')

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

    describe('success test for get all subjects', () => {
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

    describe('success test for get one subjects', () => {
        test('return Object and status', (done) => {
            request(app)
                .get('/subjects/1')
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Object))
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })

    describe('failed test for get all subjects', () => {
        test('user not registered', (done) => {
            request(app)
                .get('/subjects')
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'This page can only be accessed by registered users')
                    expect(response.status).toBe(403)
                    done()
                })
        })

        test('error for token', (done) => {
            request(app)
                .get('/subjects')
                .set('access_token', 'errortoken')
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', expect.any(String))
                    expect(response.status).toBe(403)
                    done()
                })
        })

        describe('error for user account has been banned', () => {
            beforeEach((done) => {
                User.destroy({ where: { id: id_user } })
                    .then(_ => done())
                    .catch(err => done(err))
            })
            test('eror for user account banned', (done) => {
                request(app)
                .get('/subjects')
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', "Sorry, your account has been banned")
                    expect(response.status).toBe(403)
                    done()
                })
            })
        })
    })
})