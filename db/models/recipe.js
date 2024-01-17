'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favorite }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Favorite, { foreignKey: 'recipe_id' });
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredient: DataTypes.STRING,
    time: DataTypes.INTEGER,
    image: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};