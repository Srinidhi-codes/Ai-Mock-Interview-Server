'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mockInterviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jsonMockResp: {
        allowNull: false,
        type: Sequelize.JSON
      },
      jobPosition: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jobDesc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jobExperience: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mockId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mockInterviews');
  }
};