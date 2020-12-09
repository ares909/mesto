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
const closeButton = document.querySelectorAll('.popup__cross');
const addButton = document.querySelector('.profile__addbutton');
const popup = document.querySelector('.popup');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const formName = document.querySelector('#form-name');
const formPlace = document.querySelector('#form-place');
const placeInput = document.querySelector('#place');
const imageInput = document.querySelector('#image');
const nameInput = document.querySelector('#name');
const professionInput = document.querySelector('#profession');
const elementContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elementTemplate').content;
const popupImage = document.querySelector('#popup_image-container');


//Шаблон для создания карточек
const createCards = ({name, link}) => {
  const element = elementTemplate.cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementText = element.querySelector('.element__text');
  elementImage.src = link;
  elementImage.alt = name;
  elementText.textContent = name;
  const likeButton = element.querySelectorAll('.element__like');
//ставим лайк
  likeButton.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like_active');
    });
  });
//удаляем карточку
  const deleteButton = element.querySelector('.element__trash');
  deleteButton.addEventListener('click', function (evt) {
    const cardToRemove = evt.target.closest('#element');
    cardToRemove.remove();
  });
//попап с картинкой (сейчас кнопка = картинка, сделать кнопкой всю карточку, проставить z-indexы)
  const popupButton = elementImage;
  popupButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    popupImage.classList.add('popup__image-container_opened');
    const targetImage = document.querySelector('#popup-image');
    const targetDescription = document.querySelector('#description');
    targetImage.src = link;
    targetImage.alt = name;
    targetDescription.textContent = name;
  });
  return element;
}

//Загрузка первоначальных карточек
const uploadCards = () => {
  const arrayCards = initialCards.map(createCards);
  elementContainer.prepend(...arrayCards);
}
uploadCards();

//открыть попап с именем
const openPopup = () => {
  popup.classList.add('popup_opened');
  formName.classList.add('popup__form_opened');
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;

}
//закрыть попап
const closePopup = () => {
  popup.classList.remove('popup_opened');
  const popupForm = document.querySelectorAll('#form-name, #form-place, #popup_image-container');
  popupForm.forEach((item) => {
    item.classList.remove('popup__form_opened');
    item.classList.remove('popup__card_opened');
    item.classList.remove('popup__image-container_opened');
  });
}
//открыть форму с местом
const popupPlaceOpen = () => {
  popup.classList.add('popup_opened');
  formPlace.classList.add('popup__card_opened');
}

//сохранить форму с именем
const formNameSubmitHandler = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  closePopup();
}


//Загрузка новой карточки

const formPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
  const cardPlace = placeInput.value;
  const cardImage = imageInput.value;
  const element = createCards({name: cardPlace, link: cardImage});
  elementContainer.prepend(element);
  closePopup();
}

//Привязываем кнопки к функциям
closeButton.forEach((item) => {
  item.addEventListener('click', closePopup)
});
editButton.addEventListener('click', openPopup);
addButton.addEventListener('click', popupPlaceOpen);
formName.addEventListener('submit', formNameSubmitHandler);
formPlace.addEventListener('submit', formPlaceSubmitHandler);



