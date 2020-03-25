const request = require('supertest')
const app = require('../app')
const { User, sequelize, UserSubject } = require('../models')
const { queryInterface } = sequelize
const { sign } = require('../helpers/jwt')

let token
let user_id

describe('User Routes', () => {
    beforeAll((done) => {
        User.create({
            username: "Dummy Test",
            email: "dummy@dummy.com",
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
    afterAll((done) => {
        queryInterface.bulkDelete('Users', {})
            .then(_ => done())
            .catch(err => done(err))
    })

    describe('User register', () => {
        describe('Register success', () => {
            test('return new user object and status 201', (done) => {
                request(app)
                    .post('/users/register')
                    .send({
                        username: 'Dummy Register',
                        email: 'register@dummy.com',
                        password: 'inipassword'
                    })
                    .end((err, response) => {
                        expect(err).toBe(null)
                        expect(response.body).toHaveProperty('msg', 'Register Success')
                        expect(response.body).toHaveProperty('token', expect.any(String))
                        expect(response.status).toBe(200)
                        done()
                    })
            })
        })

        describe('Register Failed', () => {
            describe('error for minimum length username', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: 'Dum',
                            email: 'register@dummy.com',
                            password: 'inipassword'
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body.msg).toEqual(expect.arrayContaining(['The minimum length of username is 6']))
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

            describe('error for username empty', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: null,
                            email: 'register@dummy.com',
                            password: 'inipassword'
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body.msg).toEqual(expect.arrayContaining(['Username cannot be empty']))
                            expect(response.status).toBe(400)
                            done()
                        })

                })
            })

            describe('error for username must unique', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: "Dummy Test",
                            email: "dummy@mail.com",
                            password: "inipassword"
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body).toHaveProperty('msg', 'username is already registered')
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

            describe('error for invalid format email', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: "Dummy Test",
                            email: "dummydummy.com",
                            password: "inipassword"
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body.msg).toEqual(expect.arrayContaining(['Invalid email format']))
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

            describe('error for minimum length of email', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: "Dummy Test",
                            email: "y@y.com",
                            password: "inipassword"
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body.msg).toEqual(expect.arrayContaining(['The minimum length of email is 10']))
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

            describe('error for email cannot be empty', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: "Dummy Test",
                            email: null,
                            password: "inipassword"
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body.msg).toEqual(expect.arrayContaining(['Email cannot be empty']))
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

            describe('error for email must unique', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: "Yuhuu Test",
                            email: "dummy@dummy.com",
                            password: "inipassword"
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body).toHaveProperty('msg', 'email is already registered')
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

            describe('error for minimum length of password', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: "Dummy Test",
                            email: "test@dummy.com",
                            password: "ini"
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body.msg).toEqual(expect.arrayContaining(['The minimum length of password is 6']))
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

            describe('error for password cannot be empty', () => {
                test('return message and status error', (done) => {
                    request(app)
                        .post('/users/register')
                        .send({
                            username: "Dummy Test",
                            email: "test@dummy.com",
                            password: null
                        })
                        .end((err, response) => {
                            expect(err).toBe(null)
                            expect(response.body.msg).toEqual(expect.arrayContaining(['Password cannot be empty']))
                            expect(response.status).toBe(400)
                            done()
                        })
                })
            })

        })
    })

    describe('User Login', () => {
        describe('Login success with email', () => {
            test('user success login', (done) => {
                request(app)
                    .post('/users/login')
                    .send({
                        userInput: "dummy@dummy.com",
                        password: "inipassword"
                    })
                    .end((err, response) => {
                        expect(err).toBe(null)
                        expect(response.body).toHaveProperty('msg', 'Login Success')
                        expect(response.body).toHaveProperty('token', expect.any(String))
                        expect(response.status).toBe(200)
                        done()
                    })
            })
        })

        describe('Login success with username', () => {
            test('user success login with username', (done) => {
                request(app)
                    .post('/users/login')
                    .send({
                        userInput: "Dummy Test",
                        password: "inipassword"
                    })
                    .end((err, response) => {
                        expect(err).toBe(null)
                        expect(response.body).toHaveProperty('msg', 'Login Success')
                        expect(response.body).toHaveProperty('token', expect.any(String))
                        expect(response.status).toBe(200)
                        done()
                    })
            })
        })

        describe('Login Failed', () => {
            test('user login failed wrong username/email', (done) => {
                request(app)
                    .post('/users/login')
                    .send({
                        userInput: "Dummy",
                        password: "inipassword"
                    })
                    .end((err, response) => {
                        expect(err).toBe(null)
                        expect(response.body).toHaveProperty('msg', 'Invalid Username/Password')
                        expect(response.status).toBe(400)
                        done()
                    })
            })

            test('user login failed wrong password', (done) => {
                request(app)
                    .post('/users/login')
                    .send({
                        userInput: "dummy@dummy.com",
                        password: "sword"
                    })
                    .end((err, response) => {
                        expect(err).toBe(null)
                        expect(response.body).toHaveProperty('msg', 'Invalid Email/Password')
                        expect(response.status).toBe(400)
                        done()
                    })
            })

            test('user login failed wrong password', (done) => {
                request(app)
                    .post('/users/login')
                    .send({
                        userInput: "Dummy Test",
                        password: "sword"
                    })
                    .end((err, response) => {
                        expect(err).toBe(null)
                        expect(response.body).toHaveProperty('msg', 'Invalid Username/Password')
                        expect(response.status).toBe(400)
                        done()
                    })
            })
        })
    })

    describe('verify user', () => {
        test('it shoul be return user and status' , (done) => {
            request(app)
                .post('/users/verify')
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.status).toBe(200)
                    expect(response.body).toHaveProperty('Histories', expect.any(Array))
                    expect(response.body).toHaveProperty('email', 'dummy@dummy.com')
                    expect(response.body).toHaveProperty('name', null)
                    expect(response.body).toHaveProperty('username', 'Dummy Test')
                    done()
                })
        })
    })

    describe('edit profile from user', () => {
        test('it should be return array with value total of edited and status' , (done) => {
            request(app)
                .put('/users')
                .send({
                    username: 'dudungdanmaman',
                    email: 'dudung@mail.com'
                })
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.status).toBe(200)
                    expect(response.body).toStrictEqual(expect.any(Array))
                    done()
                })
        })
    })

    describe('findALl userSubject', () => {
        test('should return array and status', (done) => {
            request(app)
                .get('/users/subjectHistory')
                .set('access_token', token)
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toStrictEqual(expect.any(Array))
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })

    describe('edit user subject', () => {
        test('success edit userSubject', (done) => {
            request(app)
                .patch('/users/subjectHistory/1')
                .set('access_token', token)
                .send({
                    status: 'unlocked'
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Status updated successfully')
                    expect(response.status).toBe(200)
                    done()
                })
        })

        test('success edit userSubject', (done) => {
            request(app)
                .patch('/users/subjectHistory/100')
                .set('access_token', token)
                .send({
                    status: 'unlocked'
                })
                .end((err, response) => {
                    expect(err).toBe(null)
                    expect(response.body).toHaveProperty('msg', 'Subject history not found')
                    expect(response.status).toBe(404)
                    done()
                })
        })
    })
})