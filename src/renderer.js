import { createElement, $html, $text } from './elements.js';
import getTemplate from './get_template.js';

const render = (name, data = {}) => getTemplate(name).then((html) => {
  const keys = [...html.matchAll(/\$\{([a-zA-Z0-9_]+)\}/g)];
  keys.forEach(([holder, key]) => { html = html.replace(holder, data[key]); });

  return html;
});

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
