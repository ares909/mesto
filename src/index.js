//импортируем классы и переменные
import "./pages/index.css";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import {
  initialCards,
  editButton,
  addButton,
  popups,
  name,
  profession,
  formName,
  formPlace,
  placeInput,
  imageInput,
  elementContainer,
  popupImage,
  formCard,
  validationSettings,
  nameInput,
  professionInput,
} from "./utils/constants.js";

const formNameValidator = new FormValidator(validationSettings, formName);
const formPlaceValidator = new FormValidator(validationSettings, formPlace);

const userInfo = new UserInfo({
  name: name,
  profession: profession,
});

//открываем попап картинки
const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

//создаем карточку через класс
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#elementTemplate", () =>
        popupWithImage.open(item.name, item.link)
      ).generateCard();
      cardList.addItem(card);
    },
  },
  elementContainer
);
//создаем 6 начальных карточек
cardList.renderItems();

//Загрузка новой карточки
const formWithPlace = new PopupWithForm({
  popupSelector: formPlace,
  handleFormSubmit: (item) => {
    const card = new Card(item, "#elementTemplate", () =>
      popupWithImage.open(item.name, item.link)
    ).generateCard();
    cardList.addItem(card);
    formWithPlace.close();
  },
});
formWithPlace.setEventListeners();

const openFormName = () => {
  formWithName.open();
  userInfo.getUserInfo({
    name: name.textContent,
    profession: profession.textContent,
  });
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
  formNameValidator.enableValidation();
  //функция сброса ошибки
  formNameValidator.resetValidation(formName);
};

//закрыть форму с именем
const closeFormName = () => {
  formWithName.close();
};

//сохранить форму с именем
const formWithName = new PopupWithForm({
  popupSelector: formName,
  handleFormSubmit: (item) => {
    userInfo.setUserInfo(item);
    formWithName.close();
  },
});

formWithName.setEventListeners();

//открыть форму с местом
const openFormPlace = () => {
  formWithPlace.open();
  formPlaceValidator.enableValidation();
  //функция сброса ошибки
  formPlaceValidator.resetValidation(formPlace);
  //
};

//закрыть форму с местом
const closeFormPlace = () => {
  formWithPlace.close();
  formCard.reset();
};

//закрываем попапы кликом на оверлей
popups.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(evt.target);
      formCard.reset();
    }
  });
});

editButton.addEventListener("click", openFormName);
addButton.addEventListener("click", openFormPlace);
