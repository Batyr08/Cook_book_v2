const express = require('express');
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/render');
const Reg = require('../views/Reg');

const { User } = require('../../db/models');

const regRouter = express.Router();

regRouter.get('/', (req, res) => {
  renderTemplate(Reg, null, res);
});

regRouter.post('/', async (req, res) => {
  const { email, login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ err: 'User is already exists' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, login, password: hash });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.json({ msg: 'User registered' });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = regRouter;
