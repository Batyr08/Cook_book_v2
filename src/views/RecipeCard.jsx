const React = require('react');

module.exports = function RecipeCard() {
    return (
        <>
      <link rel="stylesheet" href="/css/card.css" />
      <div className="recipe_card">
        <img style={{ height: '440px' }} src={recipe.img} alt="Картинка фильма" />
        <div className="card-body">
          <h2 className="card-title">
            {recipe.title}
          </h2>
        </div>
        <a href={`/recipes/${recipe.id}`} className="details">Подробнее → → →</a>
          Удалить
      </div>
    </>
    )
}