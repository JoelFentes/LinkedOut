import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('linkedout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const checkDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connection is successful.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

// Chama a função checkDB
checkDB();
