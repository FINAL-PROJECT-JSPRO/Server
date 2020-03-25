const { Repository, sequelize } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  validateRepository (req, res, next) {
    const UserId = req.currentUserId
    const { name } = req.body
    Repository.findAll({
      where: {
        [Op.and]: [
          {
            UserId
          },
          sequelize.where(
            sequelize.fn('lower', sequelize.col('name')),
            sequelize.fn('lower', name)
          )
        ]
      }
    })
    .then(repositories => {
      if (repositories.length) {
        next({
          status: 400,
          msg: 'Duplicate repository'
        })
      } else {
        res.status(200).json({
          msg: 'Validate'
        })
      }
    })
    .catch(err => next(err))
  },
  createRepository (req, res, next) {
    const { name, code, githubURL, description, fileName } = req.body
    const UserId = req.currentUserId
    const params = {
      name,
      code,
      description,
      fileName,
      UserId,
      githubURL
    }
    Repository.create(params)
    .then(repository => {
      res.status(201).json({
        repository
      })
    })
    .catch(err => {
      next(err)
    })
  },
  getRepositories (req, res, next) {
    const UserId = req.currentUserId
    Repository.findAll({
      where: {
        UserId
      }
    })
    .then(repositories => {
      res.status(200).json({
        repositories
      })
    })
    .catch(err => next(err))
  },
}