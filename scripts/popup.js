const editButton = document.querySelector('.profile__editbutton');
const closeButton = document.querySelector('.popup__cross');
const addButton = document.querySelector('.profile__addbutton');
const popup = document.querySelector('.popup');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const formName = document.querySelector('#form1').content; //форма один убирается из template
const nameInput = formName.querySelector('#name');
const professionInput = formName.querySelector('#profession');
const popupContainer = document.querySelector('#popup_container');
const formPlace = document.querySelector('#form2').content;
const popupOpened = () => {

  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
  popup.classList.add('popup_opened');
  popupContainer.append(formName);
}

const popupClosed = () => {
  popup.classList.remove('popup_opened');

}

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  popupClosed();
}

const popupPlaceOpened = () => {
  popup.classList.add('popup_opened');
  popupContainer.append(formPlace);

}

closeButton.addEventListener('click', popupClosed);
editButton.addEventListener('click', popupOpened);
addButton.addEventListener('click', popupPlaceOpened);
popup.addEventListener('submit', formSubmitHandler);


