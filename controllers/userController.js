const { User, History } = require('../models')
const { compare } = require('../helpers/hash')
const { sign } = require('../helpers/jwt')

class UserController {
    static register (req, res, next) {
        const {name, username, email, password} = req.body
        User.create({
            username, email, password, name
        })
            .then(user => {
                res.status(201).json({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    password: user.password
                })
            })
            .catch(next)
    }

    static login(req, res, next) {
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
            .catch(next)
    }

    static findOne(req, res, next) {
        const id = req.currentUserId
        User.findOne({
            include: [History],
            attributes: ['username', 'email', 'name'],
            where: {
                id
            },
        })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(next)
    }

    static editProfile(req, res, next) {
        const { name, username, email } = req.body
        const id = req.currentUserId
        User.update({
            name, username, email
        }, {
            where: { id }
        })
        .catch(next)
    }
}

module.exports = UserController