const request = require('supertest')
const app = require('../app')
const { sequelize, Exam } = require('../models')
const { queryInterface } = sequelize

let exam_id

describe('test for execute code', () => {
    beforeEach((done) => {
        Exam.create({
            question: `<h1 class="examTitle">Javascript is Awesome!</h1><p class="examBody">Your task is to write a function that return a phrase "Javascript is awesome".</p>`,
            skeleton:
            `function test (str) {
                return str
              }
              test()`,
            answer: 'Javascript is awesome',
            SubjectId: 1
        })
            .then(result => {
                exam_id = result.id
                done()
            })
            .catch(err => done(err))
    })

    test('it should return status 200 and result from execute code', (done) => {
        request(app)
            .post('/execute/sandbox')
            .send({
                code: `function test (str) {
                    return str
                  }
                  test('percobaan')`
            })
            .end((err, response) => {
                expect(err).toBe(null)
                expect(response.body).toHaveProperty('success', expect.any(String))
                expect(response.body).toHaveProperty('error', expect.any(Object))
                expect(response.status).toBe(200)
                done()
            })
    })

    describe('test for user answer for check', () => {
        test('success answer', (done) => {
            request(app)
                .post(`/execute/exam/${exam_id}`)
                .send({
                    code: `
                    function test (str) {
                        return str
                      }
                      test('Javascript is awesome')
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Your answer is correct')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('wrong answer', (done) => {
            request(app)
                .post(`/execute/exam/${exam_id}`)
                .send({
                    code: `
                    function test (str) {
                        return str
                      }
                      test('Javascript')
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Wrong answer, please try again')
                    expect(response.status).toBe(400)
                    done()
                })
        })

        test('wrong answer', (done) => {
            request(app)
                .post(`/execute/exam/${exam_id}`)
                .send({
                    code: `
                    function test (str) {
                        return str
                      test('Javascript')
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Code error')
                    expect(response.status).toBe(400)
                    done()
                })
        })
    })
})