const formElement = document.querySelector('.popup__form');

const inputElement = formElement.querySelector('.popup__form-text');




const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__form_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};
const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__form_type_error');
  errorElement.classList.remove('popup__error_visible');
  /*errorElement.textContent = "";*/
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
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) =>{
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};



enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__error_visible'
});
