const editButton = document.querySelector('.profile__editbutton');
const closeButton = document.querySelector('.popup__cross');
const addButton = document.querySelector('.profile__addbutton');
const popup = document.querySelector('.popup');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const popupContainer = document.querySelector('#popup_container');
const NameTemplate = document.querySelector('#popup_name').content;
const PlaceTemplate = document.querySelector('#popup_place').content;

/*const nameInput = NameTemplate.querySelector('#name');
const professionInput = PlaceTemplate.querySelector('#profession');*/


const popupOpened = () => {
  popup.classList.add('popup_opened');
  const formName = NameTemplate.cloneNode(true);
  popupContainer.append(formName);
  /*nameInput.value = name.textContent;
  professionInput.value = profession.textContent;*/

}

const popupClosed = () => {
  popup.classList.remove('popup_opened');
  const popupForm = document.querySelectorAll('#form, #form-place');
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
  /*name.textContent = nameInput.value;
  profession.textContent = professionInput.value;*/
  popupClosed();
}



closeButton.addEventListener('click', popupClosed);
editButton.addEventListener('click', popupOpened);
addButton.addEventListener('click', popupPlaceOpened);
popup.addEventListener('submit', formSubmitHandler);


