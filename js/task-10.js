function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const resultBoxes = document.querySelector('#boxes');

function createBoxes() {
  const elementInList = resultBoxes.childElementCount;
  const value = inputValue.value;
  for (let i = elementInList; i < +value + elementInList; i += 1) {
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
createBtn.addEventListener('click', createBoxes);

function destroyBoxes() {
  inputValue.value = null;
  resultBoxes.innerHTML = '';
}
destroyBtn.addEventListener('click', destroyBoxes);
