'use strict';
module.exports = (sequelize, DataTypes) => {
  class Level extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
    }
  }

  Level.init({
    name: DataTypes.STRING
  }, { sequelize });
  return Level;
};