import {
  appendIngredient,
  filterIngredients,
  renderPopup,
  ldsEllipsis,
  toggleOverflow,
} from './commons.js';
import {
  $select,
  $getAttrib,
  createElement,
  Elements,
} from './elements.js';
import listComments from './comment.js';
import { RECIPE_URL } from './apis.js';

const listIngredients = async (dataId) => fetch(RECIPE_URL + dataId)
  .then((res) => res.json())
  .then(({ meals }) => {
    const [recipe] = meals;
    const popup = renderPopup(recipe);
    const list1 = $select('.ingredients-list', popup);

    filterIngredients(recipe)
      .forEach(([, value], j) => appendIngredient(recipe[`strMeasure${j + 1}`], value, list1));

    return popup;
  });

export const showPopup = async (target) => {
  toggleOverflow();

  const wrapper = createElement('div');
  wrapper.className = 'popup-wrapper';

  wrapper.appendChild(ldsEllipsis());
  Elements.main.appendChild(wrapper);

  const dataId = $getAttrib(target, 'target_id');
  const popup = await listIngredients(dataId);
  await listComments(dataId, popup);

  wrapper.innerHTML = '';
  wrapper.appendChild(popup);
};

export const closePopup = ({ parentElement }) => {
  const { parentElement: popup } = parentElement.parentElement;

  popup.remove();
  toggleOverflow();
};
