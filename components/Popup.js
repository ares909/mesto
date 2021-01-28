export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._setEventListeners()
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  _setEventListeners() {
    this._closeButton = this._popupSelector.querySelector('.popup__cross');
    this._closeButton.addEventListener('click', () => {
      this.close();
    })
    // const closeButton = this._popupSelector.querySelector('.popup__cross').addEventListener(click, () => {
    //   this.close.bind(this);
    // });
  }
}
