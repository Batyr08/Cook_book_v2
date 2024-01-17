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
      </div>
    </>
  );
};
