import { $select, createElement, Elements } from './elements.js';

export const ldsEllipsis = () => {
  const element = createElement('div');
  element.className = 'lds-loader';
  element.innerHTML = (
    '<div>'
    + '<div class="lds-dots">'
    + '<div></div>'
    + '<div></div>'
    + '<div></div>'
    + '<div></div>'
    + '</div>'
    + '</div>'
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
  strYoutube,
}) => {
  const element = createElement('div');
  element.innerHTML = (
    '<div class="popup-wizard">'
    + '<button type="button" class="btn popup-x-btn"></button>'
    + `<img src="${strMealThumb}" alt="${strMeal}" class="recipe-image" />`
    + `<h3 class="recipe-title">${strMeal}</h3>`
    + '<ul class="recipe-taxonomy">'
    + `<li>Area: ${strArea}</li>`
    + `<li>Category: ${strCategory}</li>`
    + '</ul>'
    + '<div class="recipe-instructions">'
    + '<h3>Instructions</h3>'
    + `<p>${strInstructions}</p><button class="btn ec-btn">Read more...</button><br>`
    + `<a href="${strYoutube}" target="_blank">Watch Live on YouTube</a>`
    + '</div>'
    + '<div class="recipe-ingredients">'
    + '<h3>Ingredients</h3>'
    + '<div class="ingredients-list"></div>'
    + '</div>'
    + '<div class="comments-wrapper">'
    + '<h3>Comments (<span>0</span>)</h3>'
    + '<ul class="comments-list"></ul>'
    + '</div>'
    + '<div class="comment-form">'
    + `<form action="#" target_id="${idMeal}">`
    + '<h3>Add Comment</h3>'
    + '<input type="text" name="user" class="field" maxlength="40" placeholder="Your name" required>'
    + '<textarea name="comment" class="field" maxlength="200" placeholder="Your comment" required></textarea>'
    + '<button type="submit" class="btn comment-btn">'
    + '<span>Comment</span>'
    + '<div class="lds-dots hidden">'
    + '<div></div><div></div><div></div><div></div>'
    + '</div>'
    + '</button>'
    + '</form>'
    + '</div>'
    + '</div>'
  );
  return element;
};

export const renderComment = ({ comment, username, creation_date }) => {
  const element = createElement('li');

  element.className = 'comment-item';
  element.textContent = `${creation_date}  @${username}: ${comment}`;

  return element;
};

const renderIngredient = (measure, value) => {
  const element = createElement('span');

  element.className = 'ingredient-item';
  element.textContent = `${measure} ${value}`;

  return element;
};

export const appendIngredient = (measure, item, list) => {
  list.appendChild(renderIngredient(measure, item));
};

export const filterIngredients = (recipe) => Object.entries(recipe).filter(
  ([key, value]) => key.includes('strIngredient') && value !== null && value !== '',
);

export const scaleInstructionContainer = (element) => {
  const { textContent: value } = element;
  element.textContent = value.includes('less') ? 'Read more...' : 'Show less';

  element.previousElementSibling.classList.toggle('expand');
};

export const sortByDate = ({ creation_date: a }, { creation_date: b }) => new Date(b) - new Date(a);

export const toggleOverflow = () => Elements.body.classList.toggle('no-overflow');
