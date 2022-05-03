const colorName = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');

buttonChangeColor.addEventListener('click', onButtonClickChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClickChangeColor() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorName.textContent = currentColor;
}


