const express = require('express');
const OpenAI = require('openai')
const renderTemplate = require('../lib/render');

const AI = require('../views/AI');

const router = express.Router();

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ key: openaiApiKey });

router.get('/', (req, res) => {
  const { login } = req.session;
    renderTemplate(AI, { openaiApiKey, login }, res);
});

router.post('/', async (req, res) => {
  try {
    const userInput = req.body.question_to_AI;
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `Представь, что ты тетя Ира. Отвечай от имени тёти Иры (начни с представления). А потом отвечай на вопрос - ${userInput}` }],
      model: 'gpt-3.5-turbo',
    });
    res.json({ aiResponse: completion.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Ошибка при взаимодействии с OpenAI API:', error);
    res.status(500).json({ error: 'Произошла ошибка при взаимодействии с ИИ' });
  }
});

module.exports = router;