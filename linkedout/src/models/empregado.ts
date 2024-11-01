"use server";
import { DataTypes } from 'sequelize';
import { sequelize } from "../config/db";

export const Candidato = sequelize.define('Candidato', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  penalizacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  latitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  longitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  curriculo: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING(250),
    allowNull: false
  }
}, {
  tableName: 'candidatos' // Altere o nome da tabela aqui
});
