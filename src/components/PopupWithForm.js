import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__form-text");
    // this._api = api;
  }
  _getInputValues() {
    const dataList = {};
    this._inputList.forEach((input) => {
      dataList[input.name] = input.value;
    });
    return dataList;
  }
// //сохранить на сервер карточку
  // saveCardOnServer() {
  //   this._api
  //     .addNewCard(this._getInputValues())
  //     .then((data) => {
  //       return data
  //     }
  //     )

  //     .catch(err => console.log(err))
  // }
  // _changeName() {
  //   this._api
  //     .changeProfileInfo(this._getInputValues())
  //     .then((data) => this._handleFormSubmit(data))
  //     .catch(err => console.log(err))
  // }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
    // this.saveCardOnServer();
    // this._changeName();
      evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    this._form.reset();
    super.close();

  }
}
