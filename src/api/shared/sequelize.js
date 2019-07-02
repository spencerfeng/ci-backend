const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_PORT,
    define: {
      paranoid: true,
      freezeTableName: true,
      timestamps: true
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully!');
  })
  .catch(() => {
    console.error('Unable to connect to the database.');
  });

module.exports = sequelize;
