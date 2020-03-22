const request = require('supertest')
const app = require('../app')
const { Exam, sequelize } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')

let id

describe('exams routes', () => {
    beforeEach((done) => {
        const promises = [
            Exam.create({
                question: `This is a question`,
                skeleton: 'coding skeleton',
                answer: 'the answer',
                SubjectId: 1
            }),
            Exam.create({
                question: `This is a question2`,
                skeleton: 'coding skeleton2',
                answer: 'the answer2',
                SubjectId: 1
            }),
        ]
        Promise.all(promises)
            .then(result => {
                id = result[1].id
                done()
            })
            .catch(err => done(err))
    })

    afterEach((done) => {
        queryInterface.bulkDelete('Exams', {})
            .then(_ => done())
            .catch(err => done(err))
    })

    describe('success test for get all exmas', () => {
        test('return Array and status', (done) => {
            request(app)
                .get('/exams')
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Array))
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })

    describe('success test getOne exams', () => {
        test('return one exam and status', (done) => {
            request(app)
                .get(`/exams/${id}`)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('question', 'This is a question2')
                    expect(response.body).toHaveProperty('skeleton', 'coding skeleton2')
                    expect(response.body).toHaveProperty('answer', 'the answer2')
                    expect(response.body).toHaveProperty('SubjectId', 1)
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })
})