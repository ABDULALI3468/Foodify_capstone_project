const appId = '1AkDSb9CeEmOpdltysrI';
export const likeFetcher = async () => {
  const cards = document.querySelectorAll('.card');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`)
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};

export const likeCreator = async () => {
  const heartIcon = document.querySelectorAll('.fa-heart');
  heartIcon.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.target.classList.remove('fa-regular');
      e.target.classList.add('fa-solid');
      e.target.nextSibling.innerHTML = Number(e.target.nextSibling.innerHTML) + 1;
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1AkDSb9CeEmOpdltysrI/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_id: e.target.getAttribute('target_id'),
        }),
      });
    });
  });
};

// export { likeCreator, likeFetcher };
