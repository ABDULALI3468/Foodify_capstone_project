import { $select, $text, Elements } from './elements.js';
import Templates from './renderer.js';

export const flagTrigger = (trigger) => {
  const { disabled = false } = trigger;
  trigger.disabled = !disabled;

  $select('span', trigger).classList.toggle('hidden');
  $select('.lds-dots', trigger).classList.toggle('hidden');
};

export const commentCounter = (num, lookup) => {
  const $element = $select('.comments-wrapper span', lookup);
  const counter = parseInt($text($element), 10) + num;

  $text($element, counter);

  return counter;
};

export const appendIngredient = (measure, item, list) => {
  list.appendChild(Templates.ingredient.render(measure, item));
};

export const scaleInstructionContainer = (element) => {
  const text = $text(element);
  $text(element, (text.includes('less') ? 'Read more...' : 'Show less'));

  element.previousElementSibling.classList.toggle('expand');
};

export const toggleOverflow = () => Elements.body.classList.toggle('no-overflow');
