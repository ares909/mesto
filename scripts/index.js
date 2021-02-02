//импортируем классы
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { FormValidator, validationSettings } from "../components/FormValidator.js";
import Popup from '../components/Popup.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";


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
const formNameValidator = new FormValidator(validationSettings, formName);
const formPlaceValidator = new FormValidator(validationSettings, formPlace);
const imagePopupPicture = document.querySelector("#popup-image");
const imagePopupDescription = document.querySelector("#description");
export {popups};

//открыть попап
const openPopup = (item) => {
  const form = new Popup(item).open()
}

// const popupWithImage = (item) => {
//   const newPopup = new PopupWithImage(item).open(name, link)
// }
//закрыть попап
const closePopup = (item) => {
  const form = new Popup(item).close();
  //удаляем обработчик нажатия

};
//открываем попап картинки
//
const popupWithImage = new PopupWithImage(popupImage);

//создаем карточку через класс
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, "#elementTemplate", ()=> popupWithImage.open(item.name, item.link)).generateCard();
    cardList.addItem(card);
  },
},
elementContainer);

cardList.renderItems();


//Загрузка новой карточки

const formPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
  const name = placeInput.value;
  const link = imageInput.value;
  const item = [{ name, link }];
  const newCard = new Section({
    items: item,
    renderer: (item) => {
      const card = new Card(item, "#elementTemplate", ()=> popupWithImage.open(item.name, item.link)).generateCard();
      cardList.addItem(card);
    },
  },
  elementContainer);
  newCard.renderItems();
  closeFormPlace();
};
//попробуй это оптимизировать!

// с именем
const openFormName = () => {

  openPopup(formName);
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
  formNameValidator.enableValidation();
  //функция сброса ошибки
  formNameValidator.resetValidation(formName);
};

//закрыть форму с именем
const closeFormName = () => {
  closePopup(formName);
};

//сохранить форму с именем
const formWithName = new PopupWithForm({
  popupSelector: formName,
  handleFormSubmit: (dataList) => {

    formWithName.close()
  }
})

formWithName.setEventListeners()
// const formNameSubmitHandler = (evt) => {
//   evt.preventDefault();
//   name.textContent = nameInput.value;
//   profession.textContent = professionInput.value;
//   closeFormName();
// };

//открыть форму с местом
const openFormPlace = () => {
  openPopup(formPlace);
  formPlaceValidator.enableValidation();
  //функция сброса ошибки
  formPlaceValidator.resetValidation(formPlace);
  formCard.reset();
};

//закрыть форму с местом
const closeFormPlace = () => {
  closePopup(formPlace);
};
//закрыть попап с картинкой
// const closeImage = () => {
//   closePopup(popupImage);
// };

//закрываем попапы кликом на оверлей
popups.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(evt.target);
    }
  });
});


editButton.addEventListener("click", openFormName);
addButton.addEventListener("click", openFormPlace);
// formName.addEventListener("submit", formNameSubmitHandler);
// formPlace.addEventListener("submit", formPlaceSubmitHandler);
