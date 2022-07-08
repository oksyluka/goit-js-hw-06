const fontSizeRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = fontSizeRange.value + 'px';

const changeFontSize = () => {
    text.style.fontSize = `${fontSizeRange.value}px`;
};

fontSizeRange.addEventListener('input', changeFontSize);