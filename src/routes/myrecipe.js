const express = require('express');
const renderTemplate = require('../lib/render');
const { User, Recipe } = require('../../db/models');
const Recipes = require('../views/Recipes');

const recipeRouter = express.Router();

recipeRouter.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    //   const recipes = await Recipe.findAll();
  } catch (error) {
    console.log(error);
  }
  renderTemplate(Recipes, { login }, res);
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
    console.log(recipe)
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

// recipeRouter.put('/:id', async (req, res) => {
//   const { login } = req.session;
//   const { id } = req.params;
//   const { title, description, ingredient, time, image, user_id } = req.body;
//   try {
//     const user = await User.findOne({ where: { id: login } });
//     await Recipe.update(
//       {
//         title,
//         description,
//         ingredient,
//         time,
//         image,
//         user_id: user.id
//       },
//       {
//         where: { user_id: id }
//       }
//     );
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//   }
// });

// recipeRouter.delete('/:id', async (req, res) => {
//   const { login } = req.session;
//   try {
//     await User.findOne({ where: { login } });
//     await Recipe.destroy({ where: { id: user.id } });
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = recipeRouter;
