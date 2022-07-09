const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = document.querySelector('#ingredients');
const list =
  ingredients.map((ingredient) => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = `${ingredient}`;
    allIngredients.append(ingredientEl);
  }
  )

  






