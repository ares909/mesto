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

const placeImage = document.querySelectorAll('.element__image');
const placeName = document.querySelectorAll('.element__text');
const editButton = document.querySelector('.profile__editbutton');
const closeButton = document.querySelector('.popup__cross');
const addButton = document.querySelector('.profile__addbutton');
const popup = document.querySelector('.popup');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const popupContainer = document.querySelector('#popup_container');
const formName = document.querySelector('#form-name');
const formPlace = document.querySelector('#form-place');
const placeInput = document.querySelector('#place');
const imageInput = document.querySelector('#image');
const nameInput = document.querySelector('#name');
const professionInput = document.querySelector('#profession');
const elementContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#elementTemplate').content;


//Шаблон для создания карточек
const createCards = ({name, link}) => {
  const element = elementTemplate.cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementText = element.querySelector('.element__text');
  elementImage.src = link;
  elementImage.alt = name;
  elementText.textContent = name;
  const likeButton = element.querySelectorAll('.element__like');
//ставим лайе
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

return element;
}


//Загрузка первоначальных карточек
const uploadCards = () => {
  const arrayCards = initialCards.map(createCards);
  elementContainer.prepend(...arrayCards);
}
uploadCards();



//открыть попап с именем
const popupOpen = () => {
  popup.classList.add('popup_opened');
  formName.classList.add('popup__form_opened');
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;

}
//закрыть попап
const popupClose = () => {
  popup.classList.remove('popup_opened');
  const popupForm = document.querySelectorAll('#form-name, #form-place');
  popupForm.forEach((item) => {
    item.classList.remove('popup__form_opened');
  });
}
//открыть форму с местом
const popupPlaceOpen = () => {
  popup.classList.add('popup_opened');
  formPlace.classList.add('popup__form_opened');
}

//сохранить форму с именем
const formNameSubmitHandler = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  popupClose();
}


//Залинкуй чтобы  в поля формы выводилась функция



//Загрузка новой карточки

const formPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
  const cardPlace = placeInput.value;
  const cardImage = imageInput.value;
  const element = createCards({name: cardPlace, link: cardImage});
  elementContainer.prepend(element);
  popupClose();
}



//сделай второй сабмит и вторую кнопку с сабмитом

closeButton.addEventListener('click', popupClose);
editButton.addEventListener('click', popupOpen);
addButton.addEventListener('click', popupPlaceOpen);
formName.addEventListener('submit', formNameSubmitHandler);
formPlace.addEventListener('submit', formPlaceSubmitHandler);

//ставим лайк

/*const likeButton = document.querySelectorAll('.element__like');
likeButton.forEach(function (item) {
  item.addEventListener('click', (evt) => {

    evt.target.classList.toggle('element__like_active');
  })
})
*/



