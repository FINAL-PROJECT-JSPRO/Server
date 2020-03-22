const request = require('supertest')
const app = require('../app')
const { User, Chapter, sequelize } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')

let token
let id_user
let id_chapter

describe('chapters router test', () => {
    beforeEach((done) => {
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

    beforeEach((done) => {
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
    afterEach((done) => {
        queryInterface.bulkDelete('Chapters', {})
            .then(_ => done())
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

    // describe('test for get one chpater', () => {
    //     beforeEach((done) => {
    //         User.create({
    //             username: 'budyhartanto',
    //             email: 'iniemailbudi@mail.com',
    //             password: "inipassword"
    //         })
    //             .then(user => {
    //                 token = sign({
    //                     id: user.id,
    //                     email: user.email
    //                 })
    //                 id_user = user.id
    //                 done()
    //             })
    //             .catch(err => done(err))
    //     })
    //     test('it should be return object and status 200', (done) => {
    //         request(app)
    //             .get(`/chapters/${id_chapter}`)
    //             .set('access_token', token)
    //             .end((err, response) => {
    //                 expect(err).toBe(null)
    //                 expect(response.body).toStrictEqual(expect.any(Object))
    //                 done()
    //             })
    //     })
    // })
})