import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__form-text");
    this._submitButton = this._form.querySelector(".popup__form-button");
    this._loader = this._form.querySelector(".popup__form-button_loader");
    // this._api = api;
  }
  _getInputValues() {
    const dataList = {};
    this._inputList.forEach((input) => {
      dataList[input.name] = input.value;
    });
    return dataList;
  }
  _renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.classList.add("popup__form-button_hidden");
      this._loader.classList.remove("popup__form-button_hidden");
    } else if (!isLoading) {
      this._submitButton.classList.remove("popup__form-button_hidden");
      this._loader.classList.add("popup__form-button_hidden");
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._renderLoading(true);
      // this.close()
    });
  }
  close() {
    this._renderLoading(false);
    this._form.reset();
    super.close();
  }
}
