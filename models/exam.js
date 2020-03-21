'use strict';
module.exports = (sequelize, DataTypes) => {
  class Exam extends sequelize.Sequelize.Model {
    static associate(models) {
      Exam.belongsTo(models.Subject)
    }
  }

  Exam.init({
    question: DataTypes.TEXT,
    skeleton: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    SubjectId: DataTypes.INTEGER
  }, { sequelize });
  return Exam;
};