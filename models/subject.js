'use strict';
module.exports = (sequelize, DataTypes) => {
  class Subject extends sequelize.Sequelize.Model {
    static associate(models) {
      Subject.belongsTo(models.Level)
      Subject.hasMany(models.Chapter)
      // Subject.hasMany(models.Exam)
    }
  }

  Subject.init({
    name: DataTypes.STRING,
    LevelId: DataTypes.INTEGER
  }, { sequelize });
  return Subject;
};