const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__form-text');
const formError = document.querySelector(`.${formInput.id}-error`);
console.log(formElement);
console.log(formInput);
console.log(formError);

const showError = (input, errorMessage) => {
  input.classList.add('popup__error-border')
  formError.textContent = errorMessage;
  formError.classList.add('popup__input-error_active')
}

const hideError = (input) => {
  input.classList.remove('popup__error-border')
  formError.classList.remove('popup__input-error_active');
}

const checkInputValidity = () => {
if (!formInput.validity.valid) {
  showError(formInput, formInput.validationMessage);
}
else
{
  hideError(formInput);
}
}

formElement.addEventListener('input', function (evt) {
  evt.preventDefault();
})

































/*const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
formElement.classList.add('popup__error-border');

}
const hideInputError = () => {}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
}

const enableValidation = () => {
const formList = Array.from(document.querySelectorAll('.popup__form'));

}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__error-border',
  errorClass: 'popup__input-error_active'
});
*/
