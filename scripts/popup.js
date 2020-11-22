let editButton = document.querySelector('.profile__editbutton');
let closeButton = document.querySelector('.popup__cross');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('#name');
let professionInput = document.querySelector('#profession');
let name = document.querySelector('.profile__name');
let profession = document.querySelector('.profile__profession');
nameInput.value = name.textContent;
professionInput.value = profession.textContent;

function popupOpened() {
  popup.classList.add('popup_opened');
}

function popupClosed() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  popupClosed();
}


closeButton.addEventListener('click', popupClosed);
editButton.addEventListener('click', popupOpened);
popup.addEventListener('submit', formSubmitHandler);


