

//даем исходную конфигурацию
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__error_visible'
};


class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass
  }
  _showError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    this._input.classList.add(this._inputErrorClass);
    error.textContent = this._input.validationMessage;
    error.classList.add(this._errorClass);
  }
  //скрываем ошибку валидации
  _hideError() {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    this._input.classList.remove(this._inputErrorClass);
    error.textContent = '';
    error.classList.remove(this._errorClass);
  }
  //условие валидации
  _checkInputValidity(input) {
    this._input = input;
    if (!this._input.validity.valid) {
      this._showError();
    }
    else {
      this._hideError();
    }
  }
  //активируем/деактивируем кнопку
  _changeSubmitButton(validation) {
    this._button = this._form.querySelector(this._submitButtonSelector);
    if (!validation) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    }
    else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  //вешаем обработчики событий на все инпуты
  _setEventListeners() {
    this._inputList = document.querySelectorAll(this._inputSelector);
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._changeSubmitButton(this._form.checkValidity())
      });
    });
  }
  //resetErrorMessage() {
    //this._inputList = document.querySelectorAll(this._inputSelector);
    //this._inputList.forEach((input) => {
     // input._hideError();
   // })
 // }
  //вешаем обработчики событий на все формы
  enableValidation() {
    const formList = document.querySelectorAll(this._formSelector);
    formList.forEach(form => {
      this._setEventListeners();
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._changeSubmitButton(form.checkValidity());
    })
  }

}

export { FormValidator, validationSettings };


/*
function resetErrorMessage(form, settings) {
  const inputList = form.querySelectorAll(settings.inputSelector);
  inputList.forEach((input) => {
  hideError(form, input, settings)
  });
}

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
