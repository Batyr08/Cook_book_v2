require('@babel/register');
require('dotenv').config()
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express');
const logger = require('morgan');
const path = require('path');
const { secureRoute, checkUser } = require('./src/middlewares/common');


const sessionConfig = {
  name: 'Cookbookv2',
  store: new FileStore(),
  secret: 'BTS',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

const mainRouter = require('./src/routes/main')
const regRouter = require('./src/routes/reg')
const logRouter = require('./src/routes/log');

const app = express();
const PORT = process.env.PORT;

app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', mainRouter)
app.use('/register', secureRoute, regRouter)
app.use('/login', secureRoute, logRouter)

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
