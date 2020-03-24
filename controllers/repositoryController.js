const { Repository, sequelize } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  createRepository (req, res, next) {
    const { name, code, description, fileName } = req.body
    const UserId = req.currentUserId
    const params = {
      name,
      code,
      description,
      fileName,
      UserId
    }

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
        Repository.create(params)
        .then(repository => {
          res.status(201).json({
            repository
          })
        })
        .catch(err => {
          next(err)
        })
      }
    })
    .catch(err => next(err))
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
  getRepository (req, res, next) {
    const id = req.params.id
    Repository.findOne({
      where: {
        id
      }
    })
    .then(repository => {
      res.status(200).json({
        repository
      })
    })
    .catch(err => next(err))
  }
}