const editButton = document.querySelector('.profile__editbutton');
const closeButton = document.querySelector('.popup__cross');
const addButton = document.querySelector('.profile__addbutton');
const popup = document.querySelector('.popup');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const popupContainer = document.querySelector('#popup_container');
const NameTemplate = document.querySelector('#popup_name').content;
const PlaceTemplate = document.querySelector('#popup_place').content;
const nameInput = document.querySelector('#name');

const popupOpened = () => {
  popup.classList.add('popup_opened');
  const formName = NameTemplate.cloneNode(true);
  formName.querySelector('#name').value = name.textContent;
  formName.querySelector('#profession').value = profession.textContent;
  popupContainer.append(formName);
  }

const popupClosed = () => {
  popup.classList.remove('popup_opened');
  const popupForm = document.querySelectorAll('#form-name, #form-place');
  popupForm.forEach((item) => {
    item.remove();
  });
}

const popupPlaceOpened = () => {
  popup.classList.add('popup_opened');
  const formPlace = PlaceTemplate.cloneNode(true);
  popupContainer.append(formPlace);
}

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  const nameItem = document.querySelector('#name').value;
  name.textContent = nameItem;
  const professionItem = document.querySelector('#profession').value;
  profession.textContent = professionItem;
  popupClosed();
}

//сделай второй сабмит и вторую кнопку с сабмитом

closeButton.addEventListener('click', popupClosed);
editButton.addEventListener('click', popupOpened);
addButton.addEventListener('click', popupPlaceOpened);
popup.addEventListener('submit', formSubmitHandler);


