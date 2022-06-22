import { $select, createElement } from "./elements.js";

export const ldsEllipsis = () => {
  const element = createElement('div');
  element.className = 'lds-loader';
  element.innerHTML = (
    '<div>' +
    '<div class="lds-dots">' +
    '<div></div>' +
    '<div></div>' +
    '<div></div>' +
    '<div></div>' +
    '</div>' +
    '</div>'
  );
  return element;
};

export const flagTrigger = (trigger) => {
  const { disabled = false } = trigger;
  trigger.disabled = !disabled;

  $select('span', trigger).classList.toggle('hidden');
  $select('.lds-dots', trigger).classList.toggle('hidden');
};

export const renderPopup = ({
  idMeal,
  strMeal,
  strMealThumb,
  strArea,
  strCategory,
  strInstructions,
  strYoutube
}) => {
  const element = createElement('div');
  element.innerHTML = (
    '<div class="popup-wizard">' +
    '<button type="button" class="btn popup-x-btn"></button>' +
    `<img src="${strMealThumb}" alt="${strMeal}" class="recipe-image" />` +
    `<h3 class="recipe-title">${strMeal}</h3>` +
    '<ul class="recipe-taxonomy">' +
    `<li>Area: ${strArea}</li>` +
    `<li>Category: ${strCategory}</li>` +
    '</ul>' +
    '<div class="recipe-instructions">' +
    '<h3>Instructions</h3>' +
    `<p>${strInstructions}</p><button class="btn ec-btn">Read more...</button><br>` +
    `<a href="${strYoutube}" target="_blank">Watch Live on YouTube</a>` +
    '</div>' +
    '<div class="recipe-ingredients">' +
    '<h3>Ingredients</h3>' +
    '<div class="ingredients-list"></div>' +
    '</div>' + 
    '</div>'
  );
  return element;
};

const renderIngredient = (measure, value) => {
  const element = createElement('span');

  element.className = 'ingredient-item';
  element.textContent = measure + ' ' + value;

  return element;
};

export const appendIngredient = (measure, item, list) => {
  list.appendChild(renderIngredient(measure, item));
};

export const filterIngredients = (recipe) => Object.entries(recipe).filter(
  ([key, value]) => key.includes('strIngredient') && value !== null && value !== ''
);

export const scaleInstructionContainer = (element) => {
  const { textContent: value } = element;
  element.textContent = value.includes('less') ? 'Read more...' : 'Show less';

  element.previousElementSibling.classList.toggle('expand');
};

export const toggleOverflow = () => Elements.body.classList.toggle('no-overflow');
