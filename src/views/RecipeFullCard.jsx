const React = require('react');
const Layout = require('./Layout');

function Recipe({ login, recipe }) {
  return (
    <Layout login={login}>
      <script defer src="/client/recipefullcard.js"></script>
      <link rel="stylesheet" href="/css/addeditforms.css" />

      {/* Используйте свойства объекта recipe для доступа к данным */}
      <img style={{ height: '440px' }} src={recipe.image} alt="Картинка рецепта" />
      <div className="card-body">
        <h2 className="card-title">{recipe.title}</h2>
        <p className="card-description">{recipe.description}</p>
        <p className="card-ingredients">{recipe.ingredient}</p>
        <p className="card-time">{recipe.time}</p>
        <button type="button" className="btn btn-danger" id={recipe.id}>
          Удалить
        </button>
      </div>
      <form className="editform" data-id={recipe.id}>
        <input type="text" name="title" placeholder="Добавьте название" required defaultValue={recipe.title} />
        <input type="text" name="image" placeholder="Добавьте картинку" required defaultValue={recipe.image} />
        <input type="text" name="description" placeholder="Добавьте описание" required defaultValue={recipe.description} />
        <input type="text" name="ingredient" placeholder="Добовьте ингредиенты" required defaultValue={recipe.ingredient} />
        <input type="number" name="time" placeholder="Добавьте время приготовления" required defaultValue={recipe.time} />
        <button className="custom-btn btn-16">Изменить</button>
      </form>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Layout>
  );
}

module.exports = Recipe;
