let editButton = document.querySelector('.profile__editbutton');
let closeButton = document.querySelector('.popup__cross');
let addButton = document.querySelector('.profile__addbutton');
let popup = document.querySelector('.popup');

let name = document.querySelector('.profile__name');
let profession = document.querySelector('.profile__profession');


let formNameTemplate = document.querySelector('#form1');
let formName = document.querySelector('#form1').content; //форма один убирается из template
let nameInput = formName.querySelector('#name');
let professionInput = formName.querySelector('#profession');


let popupContainer = document.querySelector('#popup_container')
let formTemplate = document.querySelector('#form2');
let formPlace = document.querySelector('#form2').content;


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


