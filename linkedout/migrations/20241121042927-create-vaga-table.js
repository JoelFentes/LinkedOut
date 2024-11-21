"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Vagas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      distancia_maxima: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      id_empregador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Empregadores", // Nome da tabela relacionada
          key: "id", // Nome da chave primária da tabela relacionada
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      titulo: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Vagas");
  },
};
