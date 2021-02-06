import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__form-text");
  }
  _getInputValues() {
    const dataList = {};
    this._inputList.forEach((input) => {
      dataList[input.name] = input.value;
    });
    return dataList;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    this._form.reset();
    super.close();

  }
}
