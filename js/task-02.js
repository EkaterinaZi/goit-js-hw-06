const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map((item) => `<li class= 'item'>${item}</li>`).join('')
const allIngredients = document.querySelector('#ingredients');
allIngredients.insertAdjacentHTML('afterbegin', list)