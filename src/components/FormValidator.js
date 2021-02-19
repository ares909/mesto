class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }
  _showError = () => {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = this._input.validationMessage;
    this._input.classList.add(this._inputErrorClass);
    error.classList.add(this._errorClass);
  };
  _hideError = () => {
    const error = this._form.querySelector(`#${this._input.id}-error`);
    error.textContent = "";
    this._input.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
  }; //условие валидации
  _checkInputValidity = (input) => {
    this._input = input;
    if (this._input.validity.valid) {
      this._hideError();
    } else {
      this._showError();
    }
  }; //активируем/деактивируем кнопку
  _changeSubmitButton = (validation) => {
    if (!validation) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }; //вешаем обработчики событий на все инпуты

  _setEventListeners = () => {
    this._changeSubmitButton(this._form.checkValidity());
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._changeSubmitButton(this._form.checkValidity());
      });
    });
  };
  resetValidation() {
    this._inputList.forEach((input) => {
      this._checkInputValidity(input);
      this._hideError(input);
      this._changeSubmitButton(this._form.checkValidity());
    });
  } //вешаем обработчики событий на все формы
  enableValidation = () => {
    this._setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  };
}
export { FormValidator };
