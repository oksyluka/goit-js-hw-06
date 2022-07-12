const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const valueDecreased = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
const valueIncreased = () => {
    counterValue += 1;
    value.textContent = counterValue;
}
decrementBtn.addEventListener('click', valueDecreased);
incrementBtn.addEventListener('click', valueIncreased);
