const { User, History } = require('../models')
const { compare, hash } = require('../helpers/hash')
const { sign } = require('../helpers/jwt')


class UserController {
    static register (req, res, next) {
        const {name, username, email, password} = req.body
        User.create({
            username, email, password, name
        })
            .then(user => {
                const token = sign({
                    id: user.id,
                    email: user.email
                })
                res
                    .status(200)
                    .json({
                        msg: "Register Success",
                        token
                    })
            })
            .catch(next)
    }

    static login(req, res, next) {
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
                        msg: "Invalid Username/Password"
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
                                msg: "Invalid Email/Password"
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
                                msg: "Invalid Username/Password"
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
        const { name, username, email, password, confirmPassword } = req.body
        let updatedPassword
        const id = req.currentUserId

        if (password) {
            if (password === confirmPassword) {
               updatedPassword = hash(password)
               User.update({
                name, username, email, password: updatedPassword
                }, {
                    where: { id }
                })
                .then(result => {
                    res.status(200).json(result)
                })
                .catch(next)
            } else {
                next({
                    status: 400,
                    msg: 'Password does not match'
                })
            }
        } else {
            User.update({
                name, username, email
            }, {
                where: { id }
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
        }
    }

    static photoUpload(req, res, next) {
        const id = req.currentUserId
        const { imageUrl } = req
        if (imageUrl) {
            User.update({
                imageUrl: imageUrl
            }, { where: { id }} )
            .then(result => {
                if (result) {
                    res
                        .status(200)
                        .json({
                            msg: "User's profile picture updated successfully",
                            imageUrl
                        })
                } else {
                    next({ type: 'picNotUpdated' })
                }
            })
            .catch(next)
        } else {
            next({ type: 'picNotUpdated' })
        }
    }
}

module.exports = UserController