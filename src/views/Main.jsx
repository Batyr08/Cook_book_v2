const React = require('react');
const Layout = require('./Layout');

function Main({ login }) {
  return (
    <Layout login={login}>
      <p>
       Добро пожаловать на сайт книги рецептов
      </p>
    </Layout>
  );
}

module.exports = Main;
