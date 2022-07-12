const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

