const request = require('supertest')
const app = require('../app')
const { User, sequelize, History } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')

let token
let id_user


describe('history routes', () => {
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

    describe('add history', () => {
        test('test success add history', (done) => {
            request(app)
                .post('/history')
                .send({
                    ChapterId: 1,
                    status: false
                })
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('UserId', expect.any(Number))
                    expect(response.body).toHaveProperty('ChapterId', expect.any(Number))
                    expect(response.body).toHaveProperty('status', expect.any(Boolean))
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })

    describe('update history', () => {
        beforeEach((done) => {
            History.create({
                UserId: id_user,
                ChapterId: 1,
                status: false
            })
                .then(_ => done())
        })
        test('success update history', (done) => {
            request(app)
                .put('/history')
                .send({
                    ChapterId: 1,
                    status: true
                })
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Subject status updated successfully')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('data not found when update history', (done) => {
            request(app)
                .put('/history')
                .send({
                    ChapterId: 6,
                    status: true
                })
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Subject history not found')
                    expect(response.status).toBe(500)
                    done()
                })
        })
    })
})