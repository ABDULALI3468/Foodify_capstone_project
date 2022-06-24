import { API_BASE_URLS, postData } from './apis.js';
import { $getAttrib, $selectAll, $text } from './elements.js';

export const likeFetcher = async () => {
  const cards = $selectAll('.card');
  const likeCount = $selectAll('.like-count');
  await fetch(API_BASE_URLS.LIKES_URL)
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            $text(likeCount[index], item.likes);
          }
        });
      });
    });
};

export const likeCreator = async () => {
  const heartIcon = $selectAll('.fa-heart');
  heartIcon.forEach((elem) => {
    elem.addEventListener('click', ({ target }) => {
      target.classList.remove('fa-regular');
      target.classList.add('fa-solid');
      const text = $text(target.nextElementSibling);
      $text(target.nextElementSibling, Number(text) + 1);
      postData(API_BASE_URLS.LIKES_URL, { item_id: $getAttrib(target, 'target_id') });
    });
  });
};
