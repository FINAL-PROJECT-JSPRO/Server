const { History } = require('../models')

module.exports = {
  addHistory(req, res, next) {
    const UserId = req.currentUserId
    const { ChapterId, status } = req.body
    History.create({
      UserId,
      ChapterId,
      status
    })
    .then(userHistory => {
      res.status(200).json(userHistory)
    })
    .catch(next)
  },

  updateHistory(req, res, next) {
    const UserId = req.currentUserId
    const { ChapterId, status } = req.body
    History.update({
      status
    }, { where: { UserId, ChapterId }} )
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