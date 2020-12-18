function showError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.add('popup__form_type_error');
  error.textContent = input.validationMessage;
  error.classList.add('popup__error_visible');
}

function hideError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove('popup__form_type_error');
  error.textContent = '';
  error.classList.remove('popup__error_visible');
}

function checkInputValidity(form, input) {
  if (!input.validity.valid) {
    showError(form, input);
  }
  else {
    hideError(form, input);
  }
}

function changeSubmitButton(button, isValid) {
  if (!isValid) {
    button.classList.add('popup__form-button_disabled');
    button.disabled = true;
  }
  else {
    button.classList.remove('popup__form-button_disabled');
    button.disabled = false;
  }
}


function setEventListeners(form) {
  const inputList = form.querySelectorAll('.popup__form-text');
  const submitButton = form.querySelector('.popup__form-button');
  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(form, input);
      changeSubmitButton(submitButton, form.checkValidity())
    });

  });
}

function enableValidation() {
  const formList = document.querySelectorAll('.popup__form');
  formList.forEach(form => {
    setEventListeners(form);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const submitButton = form.querySelector('.popup__form-button');
    changeSubmitButton(submitButton, form.checkValidity());
  })
}
enableValidation();










/*
const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement);
  inputElement.classList.add('popup__form_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};
const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__form_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = "";

};
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideError(formElement, inputElement);
  }
}
const setEventListeners = (formElement) => {
  const inputList = Array.from(document.querySelectorAll('.popup__form-text'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement)
    });
  });
};

const changeSubmitButton = (button, isValid) => {
  if (!isValid) {
    button.classList.add('popup__form-button_disabled');
    button.setAttribute('disabled', true);
  }
  else {
    button.classList.remove('popup__form-button_disabled');
    button.setAttribute('disabled', false);
  }
}


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
    const submitButton = formElement.querySelector('.popup__form-button');
    changeSubmitButton(submitButton, checkInputValidity(formElement, inputElement));
  });
};



const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(validationSettings);*/
