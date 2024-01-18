document.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.classList.value.includes('danger')) {
        const { id } = e.target;
        const response = await fetch(`/recipes/${id}`, {
          method: 'DELETE'
        });
        const result = await response.json();
        if (result.msg) {
            window.location.href = '/recipes';
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
          window.location.href = '/recipes';
        } else {
          console.log('ОШИБКА');
        }
      } catch (error) {
        console.error(error);
      }
    }
  });