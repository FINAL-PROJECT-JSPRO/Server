'use strict';
module.exports = (sequelize, DataTypes) => {
  class Chapter extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
      Chapter.belongsTo(models.Subject)
      Chapter.hasMany(models.History)
    }
  }

  Chapter.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    SubjectId: DataTypes.INTEGER
  }, { sequelize });
  return Chapter;
};