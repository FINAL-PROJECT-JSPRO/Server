'use strict';
module.exports = (sequelize, DataTypes) => {
  class Subject extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
    }
  }

  Subject.init({
    subject: DataTypes.STRING,
    chapter: DataTypes.STRING,
    LevelId: DataTypes.INTEGER
  }, { sequelize });
  return Subject;
};