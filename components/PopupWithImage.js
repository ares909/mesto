import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup {
  _imagePopupPicture = document.querySelector("#popup-image");
  _imagePopupDescription = document.querySelector("#description");
  constructor(popupSelector) {
    // this._name = data.name;
    // this._link = data.link;
    super(popupSelector);

  }
  open(name, link) {
    this._imagePopupPicture.src = link;
    this._imagePopupPicture.alt = name;
    this._imagePopupDescription.textContent = name;
    super.open();

  }
}
