'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'imageUrl', Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn('Users','imageUrl')
  }
};
