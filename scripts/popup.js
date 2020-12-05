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
/*const namesOnly = initialCards.map(function (item) {
  return item.name;
});
const linksOnly = initialCards.map(function (item) {
  return item.link;
});
const namesExist = [...placeName];
console.log(namesExist.value);
// дописать код на добавление карточек*/




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
const nameInput = document.querySelector('#name');
const professionInput = document.querySelector('#profession');
const likeButton = document.querySelectorAll('.element__like');

/*function newNames() {

  placeName.forEach((item) => {
    console.log(item.textContent);
  });
}
newNames();*/

const popupOpen = () => {
  popup.classList.add('popup_opened');
  formName.classList.add('popup__form_opened');
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;

}

const popupClose = () => {
  popup.classList.remove('popup_opened');
  const popupForm = document.querySelectorAll('#form-name, #form-place');
  popupForm.forEach((item) => {
    item.classList.remove('popup__form_opened');
  });
}

const popupPlaceOpen = () => {
  popup.classList.add('popup_opened');
  formPlace.classList.add('popup__form_opened');
}

const formNameSubmitHandler = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  popupClose();
}



//сделай второй сабмит и вторую кнопку с сабмитом

closeButton.addEventListener('click', popupClose);
editButton.addEventListener('click', popupOpen);
addButton.addEventListener('click', popupPlaceOpen);
popup.addEventListener('submit', formNameSubmitHandler);
//ставим лайк
likeButton.forEach(function (item) => {
  item.addEventListener('click', (evt) => {
  evt.target.classList.toggle('element__like_active');
  })
})


