const React = require('react');
const Layout = require('./Layout');

function Details({ login, recipe }) {
  return (
    <Layout login={login}>
        <link rel="stylesheet" href="/css/details.css" />
    <div className="detailscontainer">
        <div className='divimg'><img src={recipe.image} alt="" /></div>

        <div className='information'> 
        <h1>{recipe.title}</h1>
        <div><img src="/img/clock.png" alt="" />{recipe.time} мин.</div>
        <div><img src="/img/ingredients.png" alt="" />{recipe.ingredient}</div>
        <p>Рецепт: {recipe.description}</p>
        
        </div>
    </div>
    </Layout>
  );
}

module.exports = Details;