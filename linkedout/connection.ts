import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('linkedout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});