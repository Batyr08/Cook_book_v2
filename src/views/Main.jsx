const React = require('react');
const Layout = require('./Layout');
const Card = require('./MyRecipeCard')

function Main({ login, allrecipes }) {
  return (
    <Layout login={login} allrecipes={allrecipes}>
      <link rel="stylesheet" href="/css/addeditforms.css" />
      <link rel="stylesheet" href="/css/card.css" />
      <div className='baners_wrapper'>
      <img src="/img/foodbaner.png" alt="foodbaner" />
      <img src="/img/banerbaner.png" alt="foodbaner" />
      <img src="/img/foodbaner1.png" alt="foodbaner" />
</div>
      <div className="myrecipes-container">
        {allrecipes.length ? (
          allrecipes.map((onerecipe) => (
            <>
              

            <div className="recipe_card">
              <div><img className="heart_logo" src="/img/heart.png" alt="" /></div>
              <img style={{ height: '440px' }} src={onerecipe.image} alt="Картинка рецепта" />
              <div className="card-body">
                <h2 className="card-title">{onerecipe.title}</h2>
              </div>
              <a href={`details/${onerecipe.id}`}>Перейти к рецепту</a>
            </div>
            </>
         
          ))
        ) : (
          <p>Никто не добавил рецепты</p>
        )}
      </div>
    </Layout>
  );
}

module.exports = Main;
