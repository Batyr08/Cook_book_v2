const React = require('react');
const Layout = require('./Layout');

function AI({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/client/ai.js" />
      <p>Рецепты от ИИ</p>
      <form action='/ai' method='POST'>
        <input type="text" name="question_to_AI" />
        <button type="submit">Спросить</button>
      </form>
      <div id="answer_from_AI"></div>
    </Layout>
  );
}

module.exports = AI;