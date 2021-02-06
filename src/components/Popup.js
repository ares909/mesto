export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popupSelector.addEventListener("click", this._closeByClickOnOverlay);
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupSelector.removeEventListener(
      "click",
      this._closeByClickOnOverlay
    );
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  _closeByClickOnOverlay = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  };
  setEventListeners() {
    this._closeButton = this._popupSelector.querySelector(".popup__cross");
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
