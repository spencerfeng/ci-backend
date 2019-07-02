module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customer', {
        id: {
          type: Sequelize.INTEGER,
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
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customer');
  }
}