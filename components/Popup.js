import { popups } from '../scripts/index.js';
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
  };
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);

  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
  }
}
  // setEventListeners(){

  // }
}
