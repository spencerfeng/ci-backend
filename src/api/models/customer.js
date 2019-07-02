const Sequelize = require('sequelize');

const sequelize = require('../shared/sequelize');

const Customer = sequelize.define('customer', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Customer;
