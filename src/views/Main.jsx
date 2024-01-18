const React = require('react');
const Layout = require('./Layout');
const Card = require('./MyRecipeCard')

function Main({ login, allrecipes }) {
  return (
    <Layout login={login} allrecipes={allrecipes}>
      <link rel="stylesheet" href="/css/addeditforms.css" />
      <div className='baners_wrapper'>
      <img src="/img/foodbaner.png" alt="foodbaner" />
      <img src="/img/banerbaner.png" alt="foodbaner" />
      <img src="/img/foodbaner1.png" alt="foodbaner" />
</div>
      <div className="myrecipes-container">
        {allrecipes.length ? (
          allrecipes.map((onerecipe) => (
            <Card
              key={onerecipe.id}
              recipeImg={onerecipe.image}
              recipeTit={onerecipe.title}
              recipeDes={onerecipe.description}
              recipeIng={onerecipe.ingredient}
              recipeTime={onerecipe.time}
              recipeId={onerecipe.id}
            />
          ))
        ) : (
          <p>Никто не добавил рецепты</p>
        )}
      </div>
    </Layout>
  );
}

module.exports = Main;
