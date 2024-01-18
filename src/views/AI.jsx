const React = require('react');
const Layout = require('./Layout');

function AI({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/client/ai.js" />
      <h1>Спроси рецепт у тёти Иры</h1>
      <form style={{height: "250px", width: "500px", display: "flex", flexDirection: "column", alignItems: "center"}} action='/ai' method='POST'>
        <input style={{width: "450px", height: "200px", boxShadow: "0px 4px 50px 0px #514A7E99"}} type="text" name="question_to_AI" />
        <button style={{marginTop: "20px", width: "120px"}} type="submit">Спросить</button>
      </form>
      <div style={{boxShadow: "0px 4px 50px 0px #514A7E99"}} id="answer_from_AI"></div>
    </Layout>
  );
}

module.exports = AI;