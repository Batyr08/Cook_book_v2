const React = require('react');

function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cookbook blog</title>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              {login ? (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      Добро пожаловать: {login}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/profile">
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
                    <a className="nav-link active" aria-current="page" href="/">
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
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
