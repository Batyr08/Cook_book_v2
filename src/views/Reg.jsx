const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <script defer src="./client/regg.js"></script>
      <form method="POST" action="/register" id="regForm">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите электронную почту"
            name='email'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="Введите имя пользователя"
            name='login'
            required
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
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
}

module.exports = Reg;
