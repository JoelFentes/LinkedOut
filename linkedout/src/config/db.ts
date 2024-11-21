import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('linkedout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Função para verificar a conexão e sincronizar as tabelas
const checkDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection is successful.");

    await sequelize.sync(); 
    console.log("All tables have been created!");

  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

checkDB();

