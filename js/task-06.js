const textInput = document.querySelector('#validation-input');
const checkInput = +textInput.dataset.length;

const isInputValid = (event) => {
    if (event.currentTarget.value.length === checkInput) {
        textInput.classList.remove('invalid');
        return textInput.classList.add('valid');
    }
     textInput.classList.remove('valid');
        return textInput.classList.add('invalid');
}

textInput.addEventListener('blur', isInputValid);