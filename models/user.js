'use strict';
module.exports = (sequelize, DataTypes) => {
  const { hash } = require('../helpers/hash')

  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
      User.hasMany(models.UserAnswer)
      User.hasMany(models.History)
      User.hasMany(models.Repository)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [6],
          msg: "The minimum length of username is 6"
        },
        notNull: {
          args: true,
          msg: "Username cannot be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email format"
        },
        len: {
          args: [10],
          msg: "The minimum length of email is 10"
        },
        notNull: {
          args: true,
          msg: "Email cannot be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: "The minimum length of password is 6"
        },
        notNull: {
          args: true,
          msg: "Password cannot be empty"
        }
      }
    },
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: user => {
        user.password = hash(user.password)
      },
      afterCreate: user => {
        const History = sequelize.models.History
        History.create({
          UserId: user.id,
          ChapterId: 1,
          status: false
        })

        const UserSubject = sequelize.models.UserSubject
        const allSubject = []
        for (let i = 1; i <= 9; i++) {
          const status = i === 1 ? 'active' : 'locked'
          const subject = {
            UserId: user.id,
            SubjectId: i,
            status
          }
          allSubject.push(subject)
        }
        UserSubject.bulkCreate(allSubject)
      }
    }
  });
  return User;
};