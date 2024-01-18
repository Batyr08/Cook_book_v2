document.addEventListener('click', async (e) => {
    if (e.target.classList === 'fav_heart') {
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