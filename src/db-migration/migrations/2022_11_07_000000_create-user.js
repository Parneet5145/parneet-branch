'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      user_type: {
        defaultValue: "vendor",
        type: Sequelize.ENUM('Admin', 'vendor')
      },
      user_status: {
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
      email_verified_at: Sequelize.DATE,
      reset_password_expires: Sequelize.DATE,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};