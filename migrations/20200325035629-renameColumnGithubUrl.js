'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.renameColumn('Repositories', 'github_url','githubURL')
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.renameColumn('Repositories', 'githubURL','github_url')
  }
};
