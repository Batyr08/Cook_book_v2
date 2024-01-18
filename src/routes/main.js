const express = require('express');
const renderTemplate = require('../lib/render');
const Main = require('../views/Main');
const { Recipe } = require('../../db/models');

const mainRouter = express.Router();

mainRouter.get('/', async (req, res) => {
  const { login } = req.session;
  const allrecipes = await Recipe.findAll()
  renderTemplate(Main, {login, allrecipes}, res);
});

mainRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('Cookbookv2');
    res.redirect('/');
  });
});

module.exports = mainRouter;
