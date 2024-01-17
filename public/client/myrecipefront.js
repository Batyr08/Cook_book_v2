const form = document.querySelector('.addform');
const container = document.querySelector('.myrecipes-container')

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

container.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.classList.value.includes('danger')) {
        const { id } = e.target;
        console.log(id)
        const response = await fetch(`/recipes/${id}`, {
          method: 'DELETE'
        });
        const result = await response.json();
        if (result.msg) {
          const card = e.target.closest('.recipe_card');
          container.removeChild(card);
        }
      }
    }
  });
