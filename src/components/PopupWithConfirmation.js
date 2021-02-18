import Api from "./Api.js";
import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleFormSubmit }, api) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._submitButton = this._form.querySelector(".popup__form-button");
    this._loader = this._form.querySelector("#loader");
    this._api = api;
  }

  _renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.classList.add("popup__form-button_hidden");
      this._loader.classList.remove("popup__form-button_hidden");
    } else {
      this._submitButton.classList.remove("popup__form-button_hidden");
      this._loader.classList.add("popup__form-button_hidden");
    }
  }

  deleteCard() {
    this.cardSelector.remove();
    this.cardSelector = null;
    this._renderLoading(true);
    this._api
      .deleteCard(this.cardData)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this._renderLoading(false);
      });
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
