const { User } = require('../models')
const { compare } = require('../helpers/hash')
const { sign } = require('../helpers/jwt')

class UserController {
    static register (req, res, next) {
      console.log('registering')
        const {username, email, password} = req.body
        User.create({
            username, email, password
        })
            .then(user => {
                res.status(201).json({
                    username: user.username,
                    email: user.email,
                    password: user.password
                })
            })
            .catch(next)
    }

    static login (req, res, next) {
        // console.log(req.body, '===')
        const { userInput, password } = req.body 
        const promises = [
            User.findOne({ where: { email: userInput } }),
            User.findOne({ where: { username: userInput } })
        ]
        Promise.all(promises)
            .then(response => {
                if (response[0] === null && response[1] === null) {
                    next({
                        status: 400,
                        msg: "Invalid Username/Email"
                    })
                } else {
                    if (response[0] !== null) {
                        const check = compare(password, response[0].password)
                        if (check) {
                            const token = sign({
                                id: response[0].id,
                                email: response[0].email,
                            })
                            res.status(200).json({
                                msg: "Login Success",
                                token
                            })
                        } else {
                            next({
                                status: 400,
                                msg: "Invalid Password"
                            })  
                        }
                    } else if (response[1] !== null) {
                        const check = compare(password, response[1].password)
                        if (check) {
                            const token = sign({
                                id: response[1].id,
                                email: response[1].email
                            })
                            res.status(200).json({
                                msg: "Login Success",
                                token
                            })
                        } else {
                            next({
                                status: 400,
                                msg: "Invalid Password"
                            })  
                        }
                    }
                }
            })
    }
}

module.exports = UserController