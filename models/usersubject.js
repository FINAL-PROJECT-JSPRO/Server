'use strict';
module.exports = (sequelize, DataTypes) => {
  class UserSubject extends sequelize.Sequelize.Model {
    static associate(models) {
      // association
      UserSubject.belongsTo(models.User)
      UserSubject.belongsTo(models.Subject)
    }
  }

  UserSubject.init({
    UserId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['locked', 'active', 'unlocked']
    }
  }, { sequelize });
  return UserSubject;
};