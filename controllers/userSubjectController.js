const { UserSubject, Subject, Chapter, History } = require('../models')

module.exports = {
  getAllUserSubject(req, res, next) {
    const UserId = req.currentUserId
    UserSubject.findAll({
      where: { UserId },
      include: [{
        model: Subject,
        include: [{
          model: Chapter,
          include: [{
            required: false,
            model: History,
            where: { UserId }
          }]
        }]
      }]
    })
      .then(subjects => {
        res
          .status(200)
          .json(subjects)
      })
      .catch(next)
  },

  updateUserSubject(req, res, next) {
    const UserId = req.currentUserId
    const { id } = req.params
    const { status } = req.body
    UserSubject.update({
      status
    }, { where: { UserId, SubjectId: id }} )
      .then(result => {
        if (result[0]) {
          res
            .status(200)
            .json({ msg: "Status updated successfully" })
        } else {
          next({ type: "subjectnotfound" })
        }
      })
      .catch(next)
  }
}
