const request = require('supertest')
const app = require('../app')
const { User, Chapter, sequelize } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')

let token
let id_user
let id_chapter

describe('chapters router test', () => {
    beforeAll((done) => {
        User.create({
            username: 'edytansil2222',
            email: 'edytansil2222@mail.com',
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

    beforeAll((done) => {
        Chapter.create({
            title: 'contoh title',
            body: 'contoh body',
            SubjectId: 1
        })
            .then(result => {
                id_chapter = result.id
                done()
            })
            .catch(err => done(err))
    })

    describe('test for get all chapter', () => {
        test('it shoul be return array of object and status 200', (done) => {
            request(app)
                .get('/chapters')
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Array))
                    done()
                })
        })
    })

    describe('test for get one chpater', () => {
        test('it should be return object and status 200', (done) => {
            request(app)
                .get(`/chapters/${id_chapter}`)
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Object))
                    done()
                })
        })
    })

    describe('failed test for get all chapter', () => {
        test('user not registered', (done) => {
            request(app)
                .get('/chapters')
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'This page can only be accessed by registered users')
                    expect(response.status).toBe(403)
                    done()
                })
        })

        test('error for token', (done) => {
            request(app)
                .get('/chapters')
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
                    .get('/chapters')
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