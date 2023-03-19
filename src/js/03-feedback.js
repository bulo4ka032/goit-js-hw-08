const feedbackForm = document.querySelector('.feedback-form');
const textarea = feedbackForm.message;
const emailInput = feedbackForm.email;
// console.log(textarea);
// console.log(emailInput, messageTextarea);

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', onFormInput);

function onFormSubmit() {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput() {
  const dates = {
    email: emailInput.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dates));
}

function populateInputs(dates) {
  const savedDates = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedDates) {
    emailInput.value = savedDates.email;
    textarea.value = savedDates.message;
  }

  console.log(savedDates);
}

populateInputs();
