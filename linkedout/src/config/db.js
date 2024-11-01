'use server'
const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize('linkedout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
await checkDB()
const checkDB = function () {
  return new Promise((resolve, reject) => {
    sequelize.authenticate({ logging: false }).then(
      async (resp) => {
        await sequelize.sync();
        console.log("database connection's ok");
        resolve(true);
      },
      (err) => {
        resolve(false);
        console.log("Database connection failed");
      },
    );
  });
};