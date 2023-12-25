const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('form');
const signUpCard = document.querySelector('.signup-card');

let valdationStatus;

// Submit the form if the validation is complete
function formSubmit(e) {
  e.preventDefault();

  if (valdationStatus) {
    validationSuccess();
  }
}

// Input Validation
function validateInput(e) {
  const emailValue = emailInput.value;
  e.preventDefault();

  if (!isValidEmail(emailValue) || emailInput === '') {
    errorMessage.style.display = 'block';
    emailInput.classList.add('error');
    valdationStatus = false;
  } else {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error');
    valdationStatus = true;
  }
}

// Check if the typed email is valid
function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

// Showing success message
function validationSuccess() {
  signUpCard.classList.add('hide');

  const div = document.createElement('div');
  div.classList.add('success-card');

  div.innerHTML = `
      <img src="assets/images/icon-success.svg" alt="success" />
      <h1>Thanks for subscribing!</h1>
      <p
        >A confirmation email has been sent to
        <span class="email">${emailInput.value}</span>.Please open it and
        click the button inside to confirm your subscription.</p
      >
      <button class="btn" id="dismiss-btn">Dismiss message</button>
  `;

  document.querySelector('.container').appendChild(div);
  document
    .querySelector('#dismiss-btn')
    .addEventListener('click', dismissMessage);
}

// Dismissing success message
function dismissMessage() {
  signUpCard.classList.remove('hide');
  document.querySelector('.success-card').remove();
}

// Event Listeners
emailInput.addEventListener('input', validateInput);
form.addEventListener('submit', formSubmit);
