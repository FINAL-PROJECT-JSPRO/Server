'use strict';
module.exports = (sequelize, DataTypes) => {
  class Exam extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
      Exam.belongsTo(models.Subject)
    }
  }

  Exam.init({
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    LevelId: DataTypes.INTEGER
  }, { sequelize });
  return Exam;
};