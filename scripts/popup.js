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

const popupOpened = () => {
  popup.classList.add('popup_opened');
  formName.classList.add('popup__form_opened');
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;

}

const popupClosed = () => {
  popup.classList.remove('popup_opened');
  const popupForm = document.querySelectorAll('#form-name, #form-place');
  popupForm.forEach((item) => {
    item.classList.remove('popup__form_opened');
  });
}

const popupPlaceOpened = () => {
  popup.classList.add('popup_opened');
  formPlace.classList.add('popup__form_opened');

}

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  popupClosed();
}

//сделай второй сабмит и вторую кнопку с сабмитом

closeButton.addEventListener('click', popupClosed);
editButton.addEventListener('click', popupOpened);
addButton.addEventListener('click', popupPlaceOpened);
popup.addEventListener('submit', formSubmitHandler);


