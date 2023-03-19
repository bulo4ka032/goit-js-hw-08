import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

feedbackForm.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function populateInputs() {
  const savedDates = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedDates) {
    feedbackForm.email.value = savedDates.email;
    feedbackForm.message.value = savedDates.message;
  }
}

populateInputs();

// function onFormInput() {
//   const dates = {
//     email: emailInput.value,
//     message: textarea.value,
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
// }
