import { API_BASE_URLS, postData } from './apis.js';

export const likeFetcher = async () => {
  const cards = document.querySelectorAll('.card');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(API_BASE_URLS.LIKES_URL)
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
      postData(API_BASE_URLS.LIKES_URL, { item_id: e.target.getAttribute('target_id') });
    });
  });
};
