'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Vaga", "latitude", {
      type: Sequelize.DOUBLE(20,8),
      allowNull: false,
      unique: true,
      defaultValue: 0,
    });
    await queryInterface.changeColumn("Vaga", "longitude", {
      type: Sequelize.DOUBLE(20,8),
      allowNull: false,
      unique: true,
      defaultValue: 0,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
