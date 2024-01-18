const express = require('express');
const renderTemplate = require('../lib/render');
const Details = require('../views/Details');
const { Recipe, User } = require('../../db/models');

const detailRouter = express.Router();

detailRouter.get('/:id', async (req, res) => {
  const { login } = req.session;
  const { id } = req.params
  const recipe = await Recipe.findOne({where: { id }})
  renderTemplate(Details, {login, recipe}, res);
});


module.exports = detailRouter;