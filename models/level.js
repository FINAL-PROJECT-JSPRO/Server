'use strict';
module.exports = (sequelize, DataTypes) => {
  class Level extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
      Level.hasMany(models.Subject)
    }
  }

  Level.init({
    name: DataTypes.STRING
  }, { sequelize });
  return Level;
};