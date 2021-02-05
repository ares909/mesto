import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup {
  imagePopupPicture = this._popupSelector.querySelector("#popup-image");
  imagePopupDescription = this._popupSelector.querySelector("#description");

  open(name, link) {
    this.imagePopupPicture.src = link;
    this.imagePopupPicture.alt = name;
    this.imagePopupDescription.textContent = name;
    super.open();
  }
}
