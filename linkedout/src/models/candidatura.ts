"use server";
import { DataTypes } from 'sequelize';
import { Vaga } from './vaga';
import { sequelize } from '../../connection';
export const Candidatura = sequelize.define('Candidatura', {
  id: {
    type: DataTypes.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_vaga: {
    type: DataTypes.INTEGER(),
    allowNull: false
  },
  distancia: {
    type: DataTypes.FLOAT(8,2),
    allowNull: false,
    defaultValue: 0
  },
  status: {
    type: DataTypes.ENUM(),
    allowNull: false,
  }
});

Candidatura.belongsTo(Vaga, { foreignKey: 'id_vaga' });
Vaga.hasMany(Candidatura, { foreignKey: 'id_vaga' });