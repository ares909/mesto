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
/*const popup = document.querySelector('.popup');*/
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
const formCardReset = document.querySelector('.popup__card');



//Шаблон для создания карточек
const createCards = ({ name, link }) => {
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
    evt.target.closest('#element').remove();
  });
  //попап с картинкой
  elementImage.addEventListener('click', function () {
    openPopup(popupImage);
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
  elementContainer.append(...arrayCards);
}
uploadCards();

//открыть попап
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}
//закрыть попап
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

//открыть форму с именем
const openFormName = () => {
  openPopup(formName);
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
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
}

//закрыть форму с местом
const closeFormPlace = () => {
  closePopup(formPlace);
}
//закрыть попап с картинкой
const closeImage = () => {
  closePopup(popupImage);
}

//Загрузка новой карточки
const formPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
  const cardPlace = placeInput.value;
  const cardImage = imageInput.value;
  const element = createCards({ name: cardPlace, link: cardImage });
  elementContainer.prepend(element);
  formCardReset.reset();
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



