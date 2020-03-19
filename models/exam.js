'use strict';
module.exports = (sequelize, DataTypes) => {
  class Exam extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
    }
  }

  Exam.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    LevelId: DataTypes.INTEGER
  }, { sequelize });
  return Exam;
};