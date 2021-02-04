const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const editButton = document.querySelector(".profile__editbutton");
const closeFormNameButton = document.querySelector("#close_card-name");
const closeFormPlaceButton = document.querySelector("#close_card-place");
const closeImageButton = document.querySelector("#close_image");
const addButton = document.querySelector(".profile__addbutton");
const popups = document.querySelectorAll(".popup");
const name = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__profession");
const formName = document.querySelector("#form-name");
const formPlace = document.querySelector("#form-place");
const placeInput = document.querySelector("#place-input");
const imageInput = document.querySelector("#image-input");
const nameInput = document.querySelector("#name-input");
const professionInput = document.querySelector("#profession-input");
const elementContainer = document.querySelector(".elements");
const popupImage = document.querySelector("#popup_image-container");
const formCard = document.forms.formCard;

export {
  initialCards,
  editButton,
  closeFormNameButton,
  closeFormPlaceButton,
  closeImageButton,
  addButton,
  popups,
  name,
  profession,
  formName,
  formPlace,
  placeInput,
  imageInput,
  nameInput,
  professionInput,
  elementContainer,
  popupImage,
  formCard,
};
