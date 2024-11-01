'use server'
"use server";
import { DataTypes } from 'sequelize';
import { sequelize } from "../config/db";
import { Empregador } from './empregador';
export const Vaga = sequelize.define('Vaga', {
  id: {
    type: DataTypes.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  distancia_maxima: {
    type: DataTypes.FLOAT(),
    allowNull: false,
    defaultValue: 0
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
  id_empregador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

Vaga.belongsTo(Empregador, { foreignKey: 'id_empregador' });
Empregador.hasMany(Vaga, { foreignKey: 'id_empregador' });