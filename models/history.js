'use strict';
module.exports = (sequelize, DataTypes) => {
  class History extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
    }
  }

  History.init({
    UserId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, { sequelize });
  return History;
};