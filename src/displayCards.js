import { likeCreator, likeFetcher } from './likes.js';
import recipieCounter from './recipieCounter.js';
import getTemplate from './get_template.js';
import { injection } from './renderer.js';
import { API_BASE_URLS } from './apis.js';
import { $html, $select } from './elements.js';

const recipies = $select('.recipies');
const recipesSection = $select('#recipesSection');

const displayCards = async () => {
  const cardTemplate = await getTemplate('item');
  fetch(API_BASE_URLS.ITEMS_URL)
    .then((response) => response.json())
    .then((data) => {
      let card = '';
      data.meals.forEach((meal) => {
        card += injection(cardTemplate, meal);
      });
      $html(recipies, card);
      likeFetcher();
      likeCreator();
      recipieCounter(data.meals, recipesSection);
    });
};

export default displayCards;
