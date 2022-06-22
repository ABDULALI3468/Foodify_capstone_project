import { showPopup, closePopup } from './popup.js';

const onready = () => {
  document.body.addEventListener('click', async ({ target }) => {
    if (target.classList.contains('trigger')) await showPopup(target);
    else if (target.classList.contains('popup-x-btn')) closePopup(target);
  });
};

export default onready;
