const _ = require('lodash');

const sequelize = require('../src/api/shared/sequelize');

const truncate = async function truncate() {
  return await Promise.all(
    _.map(sequelize.models, (model) => {
      return model.destroy({ where: {}, force: true });
    })
  );
};

module.exports = truncate;