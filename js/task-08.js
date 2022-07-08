const form = document.querySelector('.login-form');

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = form.elements;
  if (email.value === '' || password.value === '') {
    alert('Fill in all the fields, please!');
  }
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);
