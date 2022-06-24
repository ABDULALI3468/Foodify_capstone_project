import { showPopup, closePopup } from './popup.js';
import { scaleInstructionContainer } from './commons.js';

const onready = () => {
  document.body.addEventListener('click', async ({ target }) => {
    if (target.classList.contains('commentBtn')) await showPopup(target);
    else if (target.classList.contains('popup-x-btn')) closePopup(target);
    else if (target.classList.contains('ec-btn')) scaleInstructionContainer(target);
  });
};

export default onready;
