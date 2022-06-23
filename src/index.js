import './assets/styles.css';
import './assets/popup.css';
import './assets/images/bannercapstone.png';
import displayCards from './displayCards.js';
import onready from './app.js';

const contact = document.querySelector('.contact');
const cardContainer = document.querySelector('.card_container');
const contactSection = document.querySelector('#contactSection');
const recipesSection = document.querySelector('#recipesSection');
const footer = document.querySelector('.footer');

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

window.addEventListener('DOMContentLoaded', async () => {
  displayCards();
  onready();
  contact.classList.add('hidden');
});
