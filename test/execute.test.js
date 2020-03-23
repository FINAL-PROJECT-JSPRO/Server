const request = require('supertest')
const app = require('../app')
const { sequelize, Exam } = require('../models')
const { queryInterface } = sequelize

let exam_id

describe('test for execute code', () => {
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

    test('it should return status and result error from execute code', (done) => {
        request(app)
            .post('/execute/sandbox')
            .send({
                code: `function test (str) {
                    return tr
                  }
                  test('percobaan')`
            })
            .end((err, response) => {
                expect(err).toBe(null)
                expect(response.body).toStrictEqual(expect.any(Object))
                done()
            })
    })

    describe('test for user answer for check', () => {
        test('success answer case nomer 1', (done) => {
            request(app)
                .post(`/execute/exam/1`)
                .send({
                    code:`
                    function simpleString() {
                        const first = 'Javascript';
                        const second = 'is';
                        const third = 'awesome';
                      
                        return first + ' ' + second + ' ' + third
                    }`
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Your answer is correct')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('success answer case nomer 2', (done) => {
            request(app)
                .post(`/execute/exam/2`)
                .send({
                    code:`
                    function arithmetic(a, b, operator){
                        return operator === "add" ? a+b : operator === "subtract" ? a-b : operator === "multiply" ? a*b : operator === "divide" ? a/b : "wrong operator"
                    }
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Your answer is correct')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('success answer case nomer 3', (done) => {
            request(app)
                .post(`/execute/exam/3`)
                .send({
                    code:`
                    function nthChar(words) {
                        let str = '';
                        for (let i = 0; i < words.length; i++) str += words[i][i]
                        return str
                    }
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Your answer is correct')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('success answer case nomer 4', (done) => {
            request(app)
                .post(`/execute/exam/4`)
                .send({
                    code:`
                    function breakChocolate (n, m) {
                        const total = n * m - 1
                        if (total <= 0) {
                            return 0
                        } else {
                            return total
                        }
                    }
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Your answer is correct')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('success answer case nomer 5', (done) => {
            request(app)
                .post(`/execute/exam/5`)
                .send({
                    code:`
                    function tailSwap(arr) {
                        let result = []
                        let newArr = arr.map(string => string.split(':'))
                        
                        for (let i = 0; i < newArr.length; ++i) {
                            result.push(newArr[i][0] + ':' + newArr[newArr.length -1 -i][1]);
                        }
                        return result
                    }
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Your answer is correct')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('success answer case nomer 6', (done) => {
            request(app)
                .post(`/execute/exam/6`)
                .send({
                    code:`
                    function returnSpecifics(obj) {
                    let [arr1,arr2] = [[],[]]
                        for(let item in obj){
                            if (typeof obj[item] === 'number' ) arr1.push(obj[item])
                            if (typeof obj[item] === 'function') arr2.push(item)
                        }
                        return arr1.length < 1 && arr2.length < 1 ?  ['The Object is Empty'] : [...arr1, ...arr2]
                    }
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Your answer is correct')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('error answer: code error', (done) => {
            request(app)
                .post(`/execute/exam/4`)
                .send({
                    code:`
                    function breakChocolate (n, m) {
                        const total = n * m - 1
                        total <= 0 ? return 0 : return total
                    }
                    `
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Code error')
                    expect(response.status).toBe(400)
                    done()
                })
        })

        test('wrong answer', (done) => {
            request(app)
                .post(`/execute/exam/4`)
                .send({
                    code:`
                    function breakChocolate (n, m) {
                        const total = n + m - 1
                        if (total <= 0) {
                            return 0
                        } else {
                            return total
                        }
                    }
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