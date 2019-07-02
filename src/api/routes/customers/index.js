const express = require('express');

const router = express.Router();

const CustomersController = require('./controller');

router.post('/', CustomersController.createCustomer);

module.exports = router;