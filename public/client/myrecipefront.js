const form = document.querySelector('.addform');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  try {
    const response = await fetch('/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(res)
    });
    const result = JSON.stringify(response);
    if ((result.status = 200)) {
      window.location.href = '/recipes';
    }
  } catch (error) {
    console.log(error);
  }
});
