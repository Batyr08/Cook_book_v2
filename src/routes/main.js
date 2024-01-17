const express = require('express');
const renderTemplate = require('../lib/render');
const Main = require('../views/Main');

const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Main, {login}, res);
});

mainRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('Cookbookv2');
    res.redirect('/');
  });
});

module.exports = mainRouter;
