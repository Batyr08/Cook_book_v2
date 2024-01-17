const express = require('express');
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/render');
const Log = require('../views/Login');
const { User } = require('../../db/models');

const logRouter = express.Router();

logRouter.get('/', (req, res) => {
  renderTemplate(Log, null, res);
});

logRouter.post('/', async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ where: { login } });
  if (user) {
    const checkPass = await bcrypt.compare(password, user.password);
    if (checkPass) {
      req.session.login = user.login;
      req.session.save(() => {
        res.json({ msg: 'Authorization succesfully completed' });
      });
    } else {
      res.json({ err: 'Incorrect password' });
    }
  } else {
    res.json({ err: 'Such user not found' });
  }
  try {
  } catch (error) {
    console.log(error);
    res.json({ err: 'Authorization error' });
  }
});

module.exports = logRouter;
