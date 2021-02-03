import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup {
  imagePopupPicture = document.querySelector("#popup-image");
  imagePopupDescription = document.querySelector("#description");
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(name, link) {
    this.imagePopupPicture.src = link;
    this.imagePopupPicture.alt = name;
    this.imagePopupDescription.textContent = name;
    super.open();
  }
}
