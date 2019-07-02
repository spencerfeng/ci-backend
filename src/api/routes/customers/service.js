const Customer = require('../../models/customer');
const sequelize = require('../../shared/sequelize');

const createCustomer = async (name, email) => {

  let transaction;

  try {
    transaction = await sequelize.transaction();

    const newCustomer = await Customer.create({
      name,
      email
    }, { transaction });

    await transaction.commit();

    return newCustomer;
  } catch (err) {
    // Rollback transaction if any errors were encountered
    if (err) await transaction.rollback();
  };
};

module.exports = {
  createCustomer
};
