"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Candidaturas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_vaga: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Vagas", // Nome da tabela relacionada
          key: "id", // Nome da chave primária da tabela relacionada
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      distancia: {
        type: Sequelize.FLOAT(8, 2),
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.ENUM("pendente", "aceito", "rejeitado"), // Valores permitidos
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
    await queryInterface.dropTable("Candidaturas");
  },
};
