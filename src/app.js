import { showPopup } from './popup.js';
import { $select } from './elements.js';

const onready = () => {
  $select('.trigger').addEventListener('click', async ({target}) => await showPopup(target));
};

export default onready;
