const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients)

const ingredientFirst = document.createElement('li');
ingredientFirst.textContent = 'Potatoes';
ingredientFirst.classList = 'item';
const ingredientSecond = document.createElement('li');
ingredientSecond.textContent = 'Mushrooms';
ingredientSecond.classList = 'item';
const ingredientThird  = document.createElement('li');
ingredientThird.textContent = 'Garlic';
ingredientThird.classList = 'item';
const ingredientFourth = document.createElement('li');
ingredientFourth.textContent = 'Tomatos';
ingredientFourth.classList = 'item';
const ingredientFifth = document.createElement('li');
ingredientFifth.textContent = 'Herbs';
ingredientFifth.classList = 'item';
const ingredientSixth = document.createElement('li');
ingredientSixth.textContent = 'Condiments';
ingredientSixth.classList = 'item';

const allIngredients = document.querySelector('#ingredients');

allIngredients.append(ingredientFirst, ingredientSecond, ingredientThird, ingredientFourth, ingredientFifth, ingredientSixth)