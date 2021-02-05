class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }
  //показать ошибку валидации
  _showError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
  };
  //скрываем ошибку валидации
  _hideError = (form, input) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.textContent = "";
    error.classList.remove(this._errorClass);
  };
  //условие валидации
  _checkInputValidity = (form, input) => {
    if (!input.validity.valid) {
      this._showError(form, input);
    } else {
      this._hideError(form, input);
    }
  };
  //активируем/деактивируем кнопку
  _changeSubmitButton = (button, validation) => {
    if (!validation) {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    }
  };

  //вешаем обработчики событий на все инпуты
  _setEventListeners = (form) => {
    const inputList = form.querySelectorAll(this._inputSelector);
    const submitButton = form.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(form, input);
        this._changeSubmitButton(submitButton, form.checkValidity());
      });
    });
  };
  resetValidation(form) {
    const inputList = form.querySelectorAll(this._inputSelector);
    inputList.forEach((input) => {
      this._hideError(form, input);
    });
  }
  //вешаем обработчики событий на все формы
  enableValidation = () => {
    const formList = document.querySelectorAll(this._formSelector);
    formList.forEach((form) => {
      this._setEventListeners(form);
      form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      const submitButton = form.querySelector(this._submitButtonSelector);
      this._changeSubmitButton(submitButton, form.checkValidity());
    });
  };
}

export { FormValidator };
