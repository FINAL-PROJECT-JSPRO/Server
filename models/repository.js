'use strict';
module.exports = (sequelize, DataTypes) => {

  class Repository extends sequelize.Sequelize.Model {
    static associate(models) {
      Repository.belongsTo(models.User)
    }
  }

  Repository.init({
    UserId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Name cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "Name cannot be empty"
        }
      }
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Filename cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "Filename cannot be empty"
        }
      }
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Code cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "Code cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Description cannot be empty"
        },
        notEmpty: {
          args: true,
          msg: "Description cannot be empty"
        }
      }
    },
    github_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      validation: {
        isUrl: {
          args: true,
          msg: 'Invalid format url'
        }
      }
    }
  }, { sequelize })
  return Repository;
};