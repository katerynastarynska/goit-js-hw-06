const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsNameRef = ingredients.map(item => {
  const itemsRef = document.createElement('li');
  itemsRef.textContent = item;
  itemsRef.classList.add('item');
  return itemsRef;
});

const ingredientsRef = document.querySelector('ul');

ingredientsRef.append(...ingredientsNameRef);


