const React = require('react');
const Layout = require('./Layout');

function Details({ login, recipe }) {
  return (
    <Layout login={login}>
    <p>{recipe.title}</p>
    </Layout>
  );
}

module.exports = Details;