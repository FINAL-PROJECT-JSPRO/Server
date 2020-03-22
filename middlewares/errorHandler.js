module.exports = (err, req, res, next) => {
    console.log(err)
    if (err.type === 'notlogin') {
        err.status = 403
        err.msg = "This page can only be accessed by registered users"
    } else if (err.type === 'banned') {
        err.status = 403
        err.msg = "Sorry, your account has been banned"
    } else if (err.type === 'wronganswer') {
        err.status = 400
        err.msg = "Wrong answer, please try again"
    } else if (err.type === 'codeError') {
        err.status = 400
        err.msg = "Code error"
    }

    if (err.name === "SequelizeValidationError") {
        let createMsg = {
            msg: []
        }
        err.errors.forEach(el => {
            createMsg.msg.push(el.message)
        });
        res.status(400).json({
            msg: createMsg.msg
        })
    } else if (err.name === "JsonWebTokenError") {
        res.status(403).json({
            msg: err.message
        })
    } else {
        res.status(err.status || 500).json({
            msg: err.msg || "Internal Server Error",
            error: err.error
        })
    }
}