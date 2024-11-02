module.exports = (sequelize, DataTypes) => {
  const mockInterviews = sequelize.define('mockInterviews', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    jsonMockResp: {
      allowNull: false,
      type: DataTypes.JSON
    },
    jobPosition: {
      allowNull: false,
      type: DataTypes.STRING
    },
    jobDesc: {
      allowNull: false,
      type: DataTypes.STRING
    },
    jobExperience: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    mockId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  return mockInterviews;
};