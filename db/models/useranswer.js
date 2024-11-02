'use strict';

module.exports = (sequelize, DataTypes) => {
  const userAnswers = sequelize.define('userAnswers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    mockIdRef: {
      type: DataTypes.STRING,
      references: {
        model: 'mockInterviews', // name of the related model
        key: 'id', // key in the related model
      },
    },
    question: {
      type: DataTypes.STRING(1000)
    },
    correctAnswer: {
      type: DataTypes.STRING(1000)
    },
    userAnswer: {
      type: DataTypes.STRING(1000)
    },
    feedback: {
      type: DataTypes.STRING(1000)
    },
    rating: {
      type: DataTypes.INTEGER
    },
    userEmail: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  });

  // userAnswers.associate = (models) => {
  //   userAnswers.belongsTo(models.mockInterviews, {
  //     foreignKey: 'mockIdRef',
  //     targetKey: 'id',
  //     as: 'mockInterview', 
  //   });
  // };


  return userAnswers;
};