function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

function changeColor() {
 body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = getRandomHexColor();
};

button.addEventListener('click', changeColor);
  