const express = require('express');
const renderTemplate = require('../lib/render');
const { User, Recipe } = require('../../db/models');
const Recipes = require('../views/Recipes');
const RecipeFullCard = require('../views/RecipeFullCard');
const recipeRouter = express.Router();

recipeRouter.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    const user = await User.findOne({ where: { login } });
    console.log(user);
    const recipe = await Recipe.findAll({ where: { user_id: user.id } });
    console.log(recipe.length);
    renderTemplate(Recipes, { login, recipe }, res);
  } catch (error) {
    console.log(error);
  }
});

recipeRouter.post('/', async (req, res) => {
  const { login } = req.session;
  const { title, description, ingredient, time, image } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    const recipe = await Recipe.create({
      title,
      description,
      ingredient,
      time,
      image,
      user_id: user.id
    });
    console.log(recipe);
    res.json(recipe);
  } catch (error) {
    console.log(error);
  }
});

recipeRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
   const recipe = await Recipe.destroy({ where: { id } });
   res.json({ msg: 'Recipe added successfully' });
  } catch (error) {
    console.log(error);
  }
});

recipeRouter.put('/:id', async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  const { title, description, ingredient, time, image, user_id } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await Recipe.update(
      {
        title,
        description,
        ingredient,
        time,
        image,
        user_id: user.id
      },
      {
        where: { id }
      }
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

recipeRouter.get('/:id', async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  try {
    // const user = await User.findOne({ where: { login } });
    // console.log(user);
    const recipe = await Recipe.findOne({ where: { id }});
    renderTemplate(RecipeFullCard, { login, recipe }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = recipeRouter;
