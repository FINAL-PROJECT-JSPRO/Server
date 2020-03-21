'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const chapters = require('../dataForSeeder/subject.js')
    return queryInterface.bulkInsert('Subjects', chapters, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
