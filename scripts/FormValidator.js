

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
  _showError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
  }
  //скрываем ошибку валидации
  _hideError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.textContent = '';
    error.classList.remove(this._errorClass);
  }
  //условие валидации
  _checkInputValidity = (form, input) => {
    if (!input.validity.valid) {
      this._showError(form, input);
    }
    else {
      this._hideError(form, input);
    }
  }
  //активируем/деактивируем кнопку
  _changeSubmitButton = (button, validation) => {
    if (!validation) {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
    else {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    }
  }

  //вешаем обработчики событий на все инпуты
  _setEventListeners = (form) => {
    const inputList = form.querySelectorAll(this._inputSelector);
    const submitButton = form.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
      //resetErrorMessage(form, input, settings);
      input.addEventListener('input', () => {
        this._checkInputValidity(form, input);
        this._changeSubmitButton(submitButton, form.checkValidity())
      });
    });
  }
  resetValidation(form) {
    const inputList = form.querySelectorAll(this._inputSelector);
    inputList.forEach((input) => {
      this._hideError(form, input)
    });
  }
  //вешаем обработчики событий на все формы
  enableValidation = () => {
    const formList = document.querySelectorAll(this._formSelector);
    formList.forEach(form => {
      this._setEventListeners(form);
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      const submitButton = form.querySelector(this._submitButtonSelector);
      this._changeSubmitButton(submitButton, form.checkValidity());
    })
  }

  //убираем ошибку, если закрыли форму, не исправив ее

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
