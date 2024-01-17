const React = require('react');
const Layout = require('./Layout');

function Log() {
  return (
    <Layout>
      <script defer src="./client/logg.js" />
      <form method="POST" action="/login" id="logForm">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите имя пользователя"
            name='login'
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Введите пароль"
            name='password'
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </Layout>
  );
}

module.exports = Log;
