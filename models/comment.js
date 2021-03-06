'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.comment.belongsTo(models.user)
      // define association here
    }
  };
  comment.init({
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};

// Find a way to display comments on review page
// Create POST, PUT and DELETE routes for users to create edit and delete comments //