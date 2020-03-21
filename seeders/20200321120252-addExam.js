'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const chapters = require('../dataForSeeder/exam.js')
    return queryInterface.bulkInsert('Exams', chapters, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Exams', null, {});
  }
};
