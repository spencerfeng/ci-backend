const createError = require('http-errors');

const customersService = require('./service');
const asyncWrapper = require('../../shared/asyncWrapper');

const createCustomer = asyncWrapper(async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const newCustomer = await customersService.createCustomer(name, email);

    return res.status(201).json({
      id: newCustomer.id,
      name: newCustomer.name,
      email: newCustomer.email
    });
  } catch (err) {
    next(createError(500));
  };
});

module.exports = {
  createCustomer
};
