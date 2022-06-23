/**
 * @jest-environment jsdom
*/
import 'isomorphic-fetch';
import { showPopup } from './popup.js';
import { $select, createElement, Elements } from './elements.js';
import { getDetails } from './apis.js';
import { listComments } from './comment.js';
import { commentCounter } from './commons.js';
import Templates from './renderer.js';

beforeEach(() => {
  document.body.innerHTML = '<main></main>';
});

describe('Preview Popup', () => {
  test('Should be visible on the page', async () => {
    const $trigger = createElement('button', { target_id: '52772' });
    const lookup = await showPopup($trigger);

    expect($select('.popup-wizard', lookup)).not.toBeNull();
  });
});

describe('Comment Counter', () => {
  test('Should succeed', async () => {
    const response = await getDetails('52772');
    const [details] = response.meals;
    const popup = await Templates.popup.render(details);

    Elements.main.appendChild(popup);
    const counter = commentCounter(0, popup);
    await listComments('52772', popup);

    expect(commentCounter(0, popup)).not.toBe(counter);
  });
});
