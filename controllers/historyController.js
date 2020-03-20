const { History } = require('../models')

module.exports = {
  addHistory(req, res, next) {
    const UserId = req.currentUserId
    const { SubjectId, status } = req.body
    History.create({
      UserId,
      SubjectId,
      status
    })
    .then(userHistory => {
      res.status(200).json(userHistory)
    })
    .catch(err => next(err))
  },

  updateHistory(req, res, next) {
    const UserId = req.currentUserId
    const { SubjectId, status } = req.body
    History.update({
      status
    }, { where: { UserId, SubjectId }} )
      .then(result => {
        if (result[0]) {
          res
            .status(200)
            .json({ msg: "Subject status updated successfully" })
        } else {
          next({ msg: "Subject history not found" })
        }
      })
      .catch(next)
  }
}