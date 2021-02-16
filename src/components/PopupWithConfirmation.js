import Api from "./Api.js";
import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleFormSubmit }, api) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._api = api;
  }


  deleteCard() {
    this.cardSelector.remove();
    this.cardSelector = null;
    this._api
      .deleteCard(this.cardData)
      .catch((err) =>{
        console.log(err);
        })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      this.deleteCard();

    });
  }

  open(cardData, cardSelector) {
    this.cardData = cardData;
    this.cardSelector = cardSelector;
    super.open();
  }
}
