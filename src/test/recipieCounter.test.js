/**
 * @jest-environment jsdom
 */
import recipieCounter from '../recipieCounter.js';

const recipesSection = document.createElement('p');
const data = [
  {
    strMeal: 'Baingan Bharta',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
    idMeal: '52807',
  },
  {
    strMeal: 'Chickpea Fajitas',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
    idMeal: '52870',
  },
  {
    strMeal: 'Egg Drop Soup',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446137.jpg',
    idMeal: '52955',
  },
];
test('TO TEST NUMBER OF RECIPIES IN THE MENU', () => {
  const recipies = recipieCounter(data, recipesSection);
  expect(recipies).toBe(3);
});
