document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const userInput = document.querySelector('input[name="question_to_AI"]').value;

    const response = await fetch('/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question_to_AI: userInput }),
    });
  
    const data = await response.json();
    document.getElementById('answer_from_AI').innerText = `Вопрос: ${userInput} \n Ответ: ${data.aiResponse}`;
    document.querySelector('input[name="question_to_AI"]').value = '';
  });