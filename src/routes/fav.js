// const express = require('express');
// const { User, Recipe, Favorite } = require('../../db/models');
// const favoriteRouter = express.Router();


// favoriteRouter.post('/', async (req, res) => {
//     const { login } = req.session;
//     const { id } = req.body;
//     try {
//       const user = await User.findOne({ where: { login } });
//       const recipe = await Recipe.create({
//         recipe_id: id,
//         user_id: user.id
//       });
//       console.log(recipe);
//       res.sendStatus(200);
//     } catch (error) {
//       console.log(error);
//     }
//   });
  
// favoriteRouter.delete('/', async (req, res) => {
//     const { login } = req.session;
//     const { id } = req.body;
//     try {
//      const fav = await Recipe.destroy({ where: { recipe_id: id } });
//      res.json({ msg: 'Recipe added successfully' });
//     } catch (error) {
//       console.log(error);
//     }
//   });