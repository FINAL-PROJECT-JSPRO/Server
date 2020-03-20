'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const levels = require('../dataForSeeder/level')
    return queryInterface.bulkInsert('Levels', levels, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels', null, {});
  }
};
