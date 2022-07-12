const inputValue = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const resultBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const elementInBoxes = resultBoxes.childElementCount;
  const value = inputValue.value;
  for (let i = elementInBoxes; i < (+value + elementInBoxes); i += 1) {
    resultBoxes.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${i * 10 + 30 + 'px'};
          height: ${i * 10 + 30 + 'px'};
          background-color: ${getRandomHexColor()};
          ">
        </div >`
    );
  }
}

function destroyBoxes() {
  inputValue.value = null;
  resultBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
