'use strict';
module.exports = (sequelize, DataTypes) => {
  class Chapter extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
    }
  }

  Chapter.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER
  }, { sequelize });
  return Chapter;
};