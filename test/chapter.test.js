const request = require('supertest')
const app = require('../app')
const { User, sequelize } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')
const chapters = require('../dataForSeeder/chapters')

let token

describe('chapters router test', () => {
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
                done()
            })
            .catch(err => done(err))
    })

    beforeEach((done) => {
        queryInterface.bulkInsert('Chapters', chapters, {})
            .then(_ => done())
            .catch(err => done(err))
    })
    afterEach((done) => {
        queryInterface.bulkDelete('Chapters', {})
            .then(_ => done())
            .catch(err => done(err))
    })

    describe('test for get all chapter', () => {
        test('it shoul be return array of obeject and status 200', (done) => {
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
})