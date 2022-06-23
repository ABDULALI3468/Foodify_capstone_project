import { likeCreator, likeFetcher } from "./likes.js";
// import recipieCounter from "./recipieCounter.js";

const recipies = document.querySelector(".recipies");
// const recipesSection = document.querySelector("#recipesSection");

const displayCards = async () => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=British")
    .then((response) => response.json())
    .then((data) => {
      let card = "";
      data.meals.forEach((meal) => {
        card += `<div class="card" id="${meal.idMeal}">
               <div class="card-img">
                   <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
               </div>
               <div class="card-info">
                   <h2>${meal.strMeal}</h2>
                   <ul>
                       <li><button target_id=${meal.idMeal}  class="comment-btn" type="button">Comments</button></li>
                       <li><button class="like-btn"><i target_id=${meal.idMeal} class="fa-regular fa-heart"></i><span class="like-count">0</span></button></li>
                   </ul>
               </div>
             </div>`;
      });
      recipies.innerHTML = card;
      likeFetcher();
      likeCreator();
    });
};

export default displayCards;
