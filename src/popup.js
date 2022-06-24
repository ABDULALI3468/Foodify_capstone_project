import {
  $select,
  $getAttrib,
  $html,
  createElement,
  Elements,
} from './elements.js';
import Templates from './renderer.js';
import { getDetails } from './apis.js';
import { filters } from './helpers.js';
import { listComments, addComment } from './comment.js';
import { appendIngredient, toggleOverflow } from './commons.js';

const listIngredients = async (itemId) => {
  const res = await getDetails(itemId);
  const [details] = res.meals;
  const popup = await Templates.popup.render(details);
  const list1 = $select('.ingredients-list', popup);

  filters.ingredients(details).forEach(
    ([, desc], j) => appendIngredient(details[`strMeasure${j + 1}`], desc, list1),
  );

  return popup;
};

export const showPopup = async (target) => {
  toggleOverflow();

  const wrapper = createElement('div', { classes: 'popup-wrapper' });

  wrapper.appendChild(await Templates.loader.render());
  Elements.main.appendChild(wrapper);

  const dataId = $getAttrib(target, 'target_id');
  const popup = await listIngredients(dataId);
  await listComments(dataId, popup);
  $select('form', popup).onsubmit = addComment;

  $html(wrapper, '');
  wrapper.appendChild(popup);

  return popup;
};

export const closePopup = ({ parentElement }) => {
  const { parentElement: popup } = parentElement.parentElement;

  popup.remove();
  toggleOverflow();
};
