
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const editButton = document.querySelector('.profile__editbutton');
const closeFormNameButton = document.querySelector('#close_card-name');
const closeFormPlaceButton = document.querySelector('#close_card-place');
const closeImageButton = document.querySelector('#close_image');
const addButton = document.querySelector('.profile__addbutton');
const popups = document.querySelectorAll('.popup');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const formName = document.querySelector('#form-name');
const formPlace = document.querySelector('#form-place');
const placeInput = document.querySelector('#place-input');
const imageInput = document.querySelector('#image-input');
const nameInput = document.querySelector('#name-input');
const professionInput = document.querySelector('#profession-input');
const elementContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elementTemplate').content;
const popupImage = document.querySelector('#popup_image-container');
const formProfile = document.forms.formProfile;
const formCard = document.forms.formCard;
const imagePopupPicture = document.querySelector('#popup-image');
const imagePopupDescription = document.querySelector('#description');



//Шаблон для создания карточек
/*const createCards = ({ name, link }) => {
  const element = elementTemplate.cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementText = element.querySelector('.element__text');
  elementImage.src = link;
  elementImage.alt = name;
  elementText.textContent = name;
  const likeButton = element.querySelector('.element__like');
  //ставим лайк
  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  //удаляем карточку
  const deleteButton = element.querySelector('.element__trash');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  //попап с картинкой
  elementImage.addEventListener('click', function () {
    openPopup(popupImage);
    imagePopupPicture.src = link;
    imagePopupPicture.alt = name;
    imagePopupDescription.textContent = name;
  });
  return element;
}

//Загрузка первоначальных карточек
const uploadCards = () => {
  const arrayCards = initialCards.map(createCards);
  elementContainer.append(...arrayCards);
}
uploadCards();
*/
//открыть попап
const openPopup = (popups) => {
  popups.classList.add('popup_opened');
  //вешаем на весь документ обработчик нажатия
  document.addEventListener('keydown', closeByEscButton);
}
//закрыть попап
const closePopup = (popups) => {
  popups.classList.remove('popup_opened');
  //удаляем обработчик нажатия
  document.removeEventListener('keydown', closeByEscButton);
  //функция сброса ошибки

}

//открыть форму с именем
const openFormName = () => {
  openPopup(formName);
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
  //resetErrorMessage(formName, validationSettings);

  //const resetValidation = new FormValidator(validationSettings, '.profile__info').resetErrorMessage();
  //resetSubmitButton(validationSettings);
  //enableValidation(validationSettings);
}

//закрыть форму с именем
const closeFormName = () => {
  closePopup(formName);
}

//сохранить форму с именем
const formNameSubmitHandler = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  closeFormName();
}


//открыть форму с местом
const openFormPlace = () => {
  openPopup(formPlace);
  //resetErrorMessage(formPlace, validationSettings);

  //formPlace.enableValidation();
  formCard.reset();
}

//закрыть форму с местом
const closeFormPlace = () => {
  closePopup(formPlace);
}
//закрыть попап с картинкой
const closeImage = () => {
  closePopup(popupImage);
}


//закрываем попапы кликом на оверлей
popups.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    }
  })
})
//закрываем формы нажатием Esc

function closeByEscButton(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

//импортируем класс создания карточки
import Card from './Card.js';
const addNewCard = (item) => {
  const card = new Card(item, '#elementTemplate')._generateCard();
  elementContainer.prepend(card)
}

//наполняем все карточки данными из массива и выводим
initialCards.reverse().forEach((item) => {
  addNewCard(item);
 });

//Загрузка новой карточки
const formPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
  const name = placeInput.value;
  const link = imageInput.value;
  const item = { name, link }
  addNewCard(item);
  closeFormPlace();
}

//Привязываем кнопки к функциям
closeFormNameButton.addEventListener('click', closeFormName);
closeFormPlaceButton.addEventListener('click', closeFormPlace);
closeImageButton.addEventListener('click', closeImage);
editButton.addEventListener('click', openFormName);
addButton.addEventListener('click', openFormPlace);
formName.addEventListener('submit', formNameSubmitHandler);
formPlace.addEventListener('submit', formPlaceSubmitHandler);



import {FormValidator, validationSettings} from './FormValidator.js'


const formNameValidator = new FormValidator(validationSettings, '#form-name').enableValidation();
const formPlaceValidator = new FormValidator(validationSettings, '#form-place').enableValidation();

//const FormPlaceValidator = new FormValidator(validationSettings, '.popup__form-container').enableValidation();
//const FormNameValidator = new FormValidator(validationSettings, '.profile__info').enableValidation();
