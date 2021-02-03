//импортируем классы
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { FormValidator, validationSettings } from "../components/FormValidator.js";
import Popup from '../components/Popup.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards,
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
  }
 from "../utils/constants.js"

const formNameValidator = new FormValidator(validationSettings, formName);
const formPlaceValidator = new FormValidator(validationSettings, formPlace);

export {popups};
const userInfo = new UserInfo({
  name: name,
  profession: profession,
})

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
const formWithPlace = new PopupWithForm({
  popupSelector: formPlace,
  handleFormSubmit: (item) => {
    item.name = placeInput.value;
    item.link = imageInput.value;
    // item = [{ name, link }];
    const card = new Card(item, "#elementTemplate", ()=> popupWithImage.open(item.name, item.link)).generateCard();
    cardList.addItem(card);

    formWithPlace.close()
  }
})
formWithPlace.setEventListeners()
// const formPlaceSubmitHandler = (evt) => {
//   evt.preventDefault();
//   const name = placeInput.value;
//   const link = imageInput.value;
//   const item = [{ name, link }];
//   const newCard = new Section({
//     items: item,
//     renderer: (item) => {
//       const card = new Card(item, "#elementTemplate", ()=> popupWithImage.open(item.name, item.link)).generateCard();
//       cardList.addItem(card);
//     },
//   },
//   elementContainer);
//   newCard.renderItems();
//   closeFormPlace();
// };
//попробуй это оптимизировать!

// с именем
const openFormName = () => {

  openPopup(formName);
  userInfo.getUserInfo()

  // const userInfo = new UserInfo({
  //   data: (item) => {
  //     item.name.value = name.textContent;
  //     item.profession.value = profession.textContent;
  //   }
  // }).getUserInfo();
  // nameInput.value = name.textContent;
  // professionInput.value = profession.textContent;
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
  handleFormSubmit: (item) => {
    userInfo.setUserInfo(item);
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
