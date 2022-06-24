import './assets/styles.css';
import './assets/popup.css';
import './assets/images/bannercapstone.png';
import { $select } from './elements.js';
import displayCards from './displayCards.js';
import onready from './app.js';

const contact = $select('.contact');
const cardContainer = $select('.card_container');
const contactSection = $select('#contactSection');
const recipesSection = $select('#recipesSection');
const footer = $select('.footer');

contactSection.addEventListener('click', () => {
  cardContainer.classList.add('hidden');
  contact.classList.remove('hidden');
  footer.classList.add('footerContact');
});

recipesSection.addEventListener('click', () => {
  cardContainer.classList.remove('hidden');
  contact.classList.add('hidden');
  footer.classList.remove('footerContact');
});

window.addEventListener('DOMContentLoaded', () => {
  displayCards();
  onready();
  contact.classList.add('hidden');
});
