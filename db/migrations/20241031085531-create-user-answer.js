'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mockIdRef: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING(1000)
      },
      correctAnswer: {
        type: Sequelize.STRING(1000)
      },
      userAnswer: {
        type: Sequelize.STRING(1000)
      },
      feedback: {
        type: Sequelize.STRING(1000)
      },
      rating: {
        type: Sequelize.INTEGER
      },
      userEmail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userAnswers');
  }
};