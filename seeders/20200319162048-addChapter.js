'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const chapters = require('../dataForSeeder/chapters.js')
    return queryInterface.bulkInsert('Chapters', chapters, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chapters', null, {});
  }
};
