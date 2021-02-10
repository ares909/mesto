//импортируем классы и переменные
import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import {
  initialCards,
  editButton,
  addButton,
  name,
  profession,
  formName,
  formPlace,
  elementContainer,
  popupImage,
  formCard,
  validationSettings,
  nameInput,
  professionInput,
  submitButton,
  confirmationPopup,
  deleteButton,
} from "../utils/constants.js";

const formNameValidator = new FormValidator(validationSettings, formName);
const formPlaceValidator = new FormValidator(validationSettings, formPlace);
formPlaceValidator.enableValidation();
formNameValidator.enableValidation();

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
        popupWithImage.open(item.name, item.link),
        () => confirmation.open(card)
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
      popupWithImage.open(item.name, item.link), () => confirmation.open(card)
    ).generateCard();
    cardList.addItem(card);
    formWithPlace.close();
  },
});
formWithPlace.setEventListeners();

const openFormName = () => {
  formWithName.open();
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  professionInput.value = profileInfo.profession;
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

const confirmation = new PopupWithConfirmation({
  popupSelector: confirmationPopup,
  handleFormSubmit: () => {
    // cardList.remove(card);
    confirmation.close()
  }
});

confirmation.setEventListeners();

// const openConfirmation = () => {
//   confirmation.open();
// }

//открыть форму с местом
const openFormPlace = () => {
  formWithPlace.open();
  // formPlaceValidator.changeSubmitButton(submitButton, formPlace.checkValidity());
  //функция сброса ошибки
  formPlaceValidator.resetValidation(formPlace);

  //
};

//закрыть форму с местом
const closeFormPlace = () => {
  formWithPlace.close();
  formCard.reset();
};

editButton.addEventListener("click", openFormName);
addButton.addEventListener("click", openFormPlace);
// deleteButton.forEach((button) => {
//   button.addEventListener("click", openConfirmation);
// });

