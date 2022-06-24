import { createElement, $html, $text } from './elements.js';
import getTemplate from './get_template.js';

export const injection = (template, data) => {
  [...template.matchAll(/\$\{([a-zA-Z0-9_]+)\}/g)].forEach(
    ([holder, key]) => { template = template.replace(holder, data[key]); },
  );
  return template;
};

const render = (name, data = {}) => getTemplate(name).then((html) => injection(html, data));

export default {
  popup: {
    render: async (data = {
      idMeal,
      strMeal,
      strMealThumb,
      strArea,
      strCategory,
      strInstructions,
      strYoutube,
    }) => {
      const element = createElement('div');
      $html(element, await render('popup', data));
      return element;
    },
  },
  loader: {
    render: async () => {
      const element = createElement('div', { classes: 'lds-loader' });
      $html(element, await render('loader'));
      return element;
    },
  },
  comment: {
    render: ({ comment, username, creation_date }) => {
      const element = createElement('li', { classes: 'comment-item' });
      $text(element, `${creation_date}  @${username}: ${comment}`);
      return element;
    },
  },
  ingredient: {
    render: (measure, value) => {
      const element = createElement('span', { classes: 'ingredient-item' });
      $text(element, `${measure} ${value}`);
      return element;
    },
  },
};
