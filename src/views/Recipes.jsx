const React = require('react');
const Layout = require('./Layout');
const Card = require('./MyRecipeCard')

function Recipe({ login, recipe}) {
  return (
    <Layout login={login}>
      <script defer src="./client/myrecipefront.js"></script>
      <link rel="stylesheet" href="/css/addeditforms.css" />
      <link rel="stylesheet" href="/css/card.css" />
      <div className='myrecipes_wrapper'>

<div className='baners_wrapper'>
 <img src="/img/foodbaner.png" alt="foodbaner" />
<div className="addformwrapper">
        <h3>Добавь свой рецепт!</h3>
        <form className="addform" method="POST" action="/recipes">
          <input type="text" name="title" placeholder="Добавьте название" required />
          <input type="text" name="image" placeholder="Добавьте картинку" required />
          <input type="text" name="description" placeholder="Добавьте описание" required />
          <input type="text" name="ingredient" placeholder="Добовьте ингредиенты" required />
          <input type="number" name="time" placeholder="Добавьте время приготовления" required />
          <button className="custom-btn btn-16">Добавить</button>
        </form>
      </div>
      <img src="/img/foodbaner1.png" alt="foodbaner" />
</div>
   
      <div className="myrecipes-container">
        {recipe.length ? (
          recipe.map((onerecipe) => (
            <div className="recipe_card">
        <img style={{ height: '440px' }} src={onerecipe.image} alt="Картинка рецепта" />
        <div className="card-body">
          <h2 className="card-title">{onerecipe.title}</h2>
          <p className="card-description">{onerecipe.description}</p>
          <p className="card-ingredients">{onerecipe.ingredient}</p>
          <p className="card-time">{onerecipe.time}</p>
          <button type="button" className="btn btn-danger" id={onerecipe.id}>
            Удалить
          </button>
        </div>
        <a href={`recipes/${onerecipe.id}`}>Отредактировать рецепт</a>
      </div>
          ))
        ) : (
          <p>У вас еще нет рецептов</p>
        )}
      </div>

      </div>
     
    </Layout>
  );
}

module.exports = Recipe;
