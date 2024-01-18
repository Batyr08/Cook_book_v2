const form = document.querySelector('.addform');
const container = document.querySelector('.myrecipes-container')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data);
    const res = Object.fromEntries(data);
    console.log(res);
    try {
      const response = await fetch('/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(res)
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        const div = document.createElement('div');
        div.classList.add('recipe_card');
        div.id = `recipe-${result.id}`;
        div.innerHTML = `
        <div class="recipe_card">
        <img style={{ height: '440px' }} src=${result.image} alt="Картинка рецепта" />
        <div class="card-body">
          <h2 class="card-title">${result.title}</h2>
          <p class="card-description">${result.description}</p>
          <p class="card-ingredients">${result.ingredient}</p>
          <p class="card-time">${result.time}</p>
          <button type="button" class="btn btn-danger" id=${result.id}>
            Удалить
          </button>
        </div>
        <a href=${`recipes/${result.id}`}>Перейти к рецепту</a>
      </div>
          `;
        container.appendChild(div);
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

  document.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('editform')) {
      const formData = new FormData(e.target);
      const title = formData.get('title');
      const image = formData.get('image');
      const description = formData.get('description');
      const ingredient = formData.get('ingredient');
      const time = formData.get('time');
      const id = e.target.dataset.id;
  
      try {
        const response = await fetch(`/recipes/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, image, description, ingredient, time }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          window.location.reload();
        } else {
          console.log('ОШИБКА');
        }
      } catch (error) {
        console.error(error);
      }
    }
  });