const React = require('react');
const Layout = require('./Layout');
const Card = require('./MyRecipeCard')

function Recipe({ login, recipe}) {
  return (
    <Layout login={login}>
      <script defer src="./client/myrecipefront.js"></script>
      <link rel="stylesheet" href="/css/addeditforms.css" />
      <div className="addformwrapper">
        <h3>Добавь рецепт!</h3>
        <form className="addform" method="POST" action="/recipes">
          <input type="text" name="title" placeholder="Добавьте название" required />
          <input type="text" name="image" placeholder="Добавьте картинку" required />
          <input type="text" name="description" placeholder="Добавьте описание" required />
          <input type="text" name="ingredient" placeholder="Добовьте ингредиенты" required />
          <input type="number" name="time" placeholder="Добавьте время приготовления" required />
          <button className="custom-btn btn-16">Добавить</button>
        </form>
      </div>
      <div className="myrecipes-container">
        {recipe.length ? (
          recipe.map((onerecipe) => (
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
          <p>У вас еще нет рецептов</p>
        )}
      </div>
    </Layout>
  );
}

module.exports = Recipe;
