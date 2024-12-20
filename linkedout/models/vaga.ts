'use server'
"use server";
import { DataTypes } from 'sequelize';
import { Empregador } from './empregador';
import { sequelize } from '../connection';
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
}, {
  tableName: "Vaga"
});

Vaga.belongsTo(Empregador, { foreignKey: 'id_empregador' });
Empregador.hasMany(Vaga, { foreignKey: 'id_empregador' });