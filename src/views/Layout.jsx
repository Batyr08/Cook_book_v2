const React = require('react');

function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <title>Cookbook blog</title>
      </head>
      <body>
    
      <div className="glass" />
      <div className="logo_container">
        <input type="checkbox" id="nav-cta" />
        <aside>
          <label htmlFor="nav-cta" className="cta"><span /></label>
           
              {login ? (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      Добро пожаловать: {login}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/recipes">
                      Мои рецепты
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Избранное
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Главная
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/ai">
                      Рецепты от ИИ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">
                      Выйти
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/login">
                      Войти
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      Регистрация
                    </a>
                  </li>
                </ul>
              )}
            
            </aside>
      </div>
    
        {children}
      </body>
    
      <div className="custom-shape-divider-bottom-1705101024">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" />
        </svg>
      </div>
     
    </html>
  );
}

module.exports = Layout;
