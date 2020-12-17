<<<<<<< HEAD




=======
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
>>>>>>> 4b01b953786ee53cf42fd41fd3459bed041643ef









<<<<<<< HEAD
/*enableValidation({
=======
























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
>>>>>>> 4b01b953786ee53cf42fd41fd3459bed041643ef
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
<<<<<<< HEAD
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__error_visible'
}); */


=======
  inputErrorClass: 'popup__error-border',
  errorClass: 'popup__input-error_active'
});
*/
>>>>>>> 4b01b953786ee53cf42fd41fd3459bed041643ef
