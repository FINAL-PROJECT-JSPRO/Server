module.exports = (err, req, res, next) => {
    // console.log(err)
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
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
            msg: err.errors[0].message
        })
    } else if (err.type === 'chapternotfound') {
        err.status = 404
        err.msg = "Chapter history not found"
    } else if (err.type === 'subjectnotfound') {
        err.status = 404
        err.msg = "Subject history not found"
    } else if (err.type === 'invalidToken') {
        err.status = 403
        err.msg = "Sorry, your github token seems to be invalid or expired"
    } else if (err.type === 'tokenNotProvided') {
        err.status = 403
        err.msg = "Please login by github account first"
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
    } else if (err.name === 'SyntaxError') {
        res
            .status(403)
            .json({
                name: err.name,
                msg: err.message
            })
    } else if (err.name === 'Error') {
        res
            .status(403)
            .json({
                name: err.name,
                msg: err.message
            })
    } else {
        res.status(err.status || 500).json({
            msg: err.msg || "Internal Server Error",
            error: err.error
        })
    }
}