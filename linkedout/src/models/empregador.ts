"use server";
import { DataTypes } from 'sequelize';
import { sequelize } from '../../connection';
export const Empregador = sequelize.define('Empregador', {
  id: {
    type: DataTypes.INTEGER(),
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
  cpfcnpj: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    defaultValue: 0
  },
  nome: {
    type: DataTypes.STRING(250),
    allowNull: false
  }
});