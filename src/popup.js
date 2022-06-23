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
import { listComments, addComment } from './comment.js';
import { getDetails } from './apis.js';

const listIngredients = async (itemId) => {
  const res = await getDetails(itemId);
  const [details] = res.meals;
  const popup = renderPopup(details);
  const list1 = $select('.ingredients-list', popup);

  filterIngredients(details).forEach(
    ([, desc], j) => appendIngredient(details[`strMeasure${j + 1}`], desc, list1),
  );

  return popup;
};

export const showPopup = async (target) => {
  toggleOverflow();

  const wrapper = createElement('div');
  wrapper.className = 'popup-wrapper';

  wrapper.appendChild(ldsEllipsis());
  Elements.main.appendChild(wrapper);

  const dataId = $getAttrib(target, 'target_id');
  const popup = await listIngredients(dataId);
  await listComments(dataId, popup);
  $select('form', popup).onsubmit = addComment;

  wrapper.innerHTML = '';
  wrapper.appendChild(popup);

  return popup;
};

export const closePopup = ({ parentElement }) => {
  const { parentElement: popup } = parentElement.parentElement;

  popup.remove();
  toggleOverflow();
};
