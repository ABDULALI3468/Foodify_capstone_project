import { likeCreator, likeFetcher } from './likes.js';
import recipieCounter from './recipieCounter.js';
import { API_BASE_URLS } from './apis.js';

const recipies = document.querySelector('.recipies');
const recipesSection = document.querySelector('#recipesSection');

const displayCards = async () => {
  fetch(API_BASE_URLS.ITEMS_URL)
    .then((response) => response.json())
    .then((data) => {
      let card = '';
      data.meals.forEach((meal) => {
        card += `<div class="card" id="${meal.idMeal}">
               <div class="card-img">
                   <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
               </div>
               <div class="card-info">
                   <h2>${meal.strMeal}</h2>
                   <ul>
                       <li><button target_id=${meal.idMeal}  class="commentBtn" type="button">Comments</button></li>
                       <li><button class="like-btn"><i target_id=${meal.idMeal} class="fa-regular fa-heart"></i><span class="like-count">0</span></button></li>
                   </ul>
               </div>
             </div>`;
      });
      recipies.innerHTML = card;
      likeFetcher();
      likeCreator();
      recipieCounter(data.meals, recipesSection);
    });
};

export default displayCards;
