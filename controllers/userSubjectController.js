const { UserSubject } = require('../models')

module.exports = {
  getAllUserSubject(req, res, next) {
    const UserId = req.currentUserId
    UserSubject.findAll({ where: { UserId } })
      .then(allSubjects => {
        const unlocked = allSubjects.filter(subject => subject.status === 'unlocked')
        const active = allSubjects.filter(subject => subject.status === 'active')
        const locked = allSubjects.filter(subject => subject.status === 'locked')

        res
          .status(200)
          .json({unlocked, active, locked})
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