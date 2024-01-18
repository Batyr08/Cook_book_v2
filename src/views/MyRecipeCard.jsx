const React = require('react');

module.exports = function MyRecipeCard({
  recipeImg,
  recipeTit,
  recipeDes,
  recipeIng,
  recipeTime,
  recipeId
}) {
  return (
    <>
      <link rel="stylesheet" href="/css/card.css" />
      <script defer src="/client/myrecipefront.js" />
      <div className="recipe_card">
        <img style={{ height: '440px' }} src={recipeImg} alt="Картинка рецепта" />
        <div className="card-body">
          <h2 className="card-title">{recipeTit}</h2>
          <p className="card-description">{recipeDes}</p>
          <p className="card-ingredients">{recipeIng}</p>
          <p className="card-time">{recipeTime}</p>
          <button type="button" className="btn btn-danger" id={recipeId}>
            Удалить
          </button>
        </div>
        <a href={`recipes/${recipeId}`}>Перейти к рецепту</a>
        <form className="editform" data-id={recipeId}>
          <input type="text" name="title" placeholder="Добавьте название" required defaultValue={recipeTit} />
          <input type="text" name="image" placeholder="Добавьте картинку" required defaultValue={recipeImg} />
          <input type="text" name="description" placeholder="Добавьте описание" required defaultValue={recipeDes} />
          <input type="text" name="ingredient" placeholder="Добовьте ингредиенты" required defaultValue={recipeIng} />
          <input type="number" name="time" placeholder="Добавьте время приготовления" required defaultValue={recipeTime} />
          <button className="custom-btn btn-16">Изменить</button>

        </form>         
      </div>
    </>
  );
};
