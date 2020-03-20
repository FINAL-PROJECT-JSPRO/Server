'use strict';
module.exports = (sequelize, DataTypes) => {
  class UserAnswer extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
    }
  }
  
  UserAnswer.init({
    UserId: DataTypes.INTEGER,
    ExamId: DataTypes.INTEGER,
    answer: DataTypes.TEXT,
    time: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, { sequelize });
  return UserAnswer;
};