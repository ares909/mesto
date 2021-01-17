

//даем исходную конфигурацию
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__error_visible'
};


export default class FormValidator {
  constructor(settings, input){
    this._settings = settings;
    this._input = input;
  }
}


/*

//показываем ошибку валидации
function showError(form, input, settings) {
const error = form.querySelector(`#${input.id}-error`);
input.classList.add(settings.inputErrorClass);
error.textContent = input.validationMessage;
error.classList.add(settings.errorClass);
}
//скрываем ошибку валидации
function hideError(form, input, settings) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  error.textContent = '';
  error.classList.remove(settings.errorClass);
}
//условие валидации
function checkInputValidity(form, input, settings) {
  if (!input.validity.valid) {
    showError(form, input, settings);
  }
  else {
    hideError(form, input, settings);
  }
}
//активируем/деактивируем кнопку
function changeSubmitButton(button, validation, settings) {
  if (!validation) {
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
  }
  else {
    button.classList.remove(settings.inactiveButtonClass);
    button.disabled = false;
  }
}

//вешаем обработчики событий на все инпуты
function setEventListeners(form, settings) {
  const inputList = form.querySelectorAll(settings.inputSelector);
  const submitButton = form.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    //resetErrorMessage(form, input, settings);
    input.addEventListener('input', () => {
      checkInputValidity(form, input, settings);
      changeSubmitButton(submitButton, form.checkValidity(), settings)
    });
  });
}
//вешаем обработчики событий на все формы
function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(form => {
    setEventListeners(form, settings);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const submitButton = form.querySelector(settings.submitButtonSelector);
    changeSubmitButton(submitButton, form.checkValidity(), settings);
  })
}

//убираем ошибку, если закрыли форму, не исправив ее

function resetErrorMessage(form, settings) {
  const inputList = form.querySelectorAll(settings.inputSelector);
  inputList.forEach((input) => {
  hideError(form, input, settings)
  });
}

//Сбрасываем валидацию кнопки после закрытия формы с ошибкой
function resetSubmitButton(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(form => {
    const submitButton = form.querySelector(settings.submitButtonSelector);
    changeSubmitButton(submitButton, form.checkValidity(), settings);
});
}


//вызываем функицю валидации
enableValidation(validationSettings);
*/
