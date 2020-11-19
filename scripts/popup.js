let editButton = document.querySelector('.profile__editbutton');
let closeButton = document.querySelector('.popup__cross');
let popup = document.querySelector('.popup');

function popupOpened() {
  popup.classList.add('popup_opened');
  let nameInput = name.value
}

editButton.addEventListener('click', popupOpened);

function popupClosed() {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', popupClosed);

let submitButton = document.querySelector('.popup__form-button');
let name = document.querySelector('.profile__name');
let profession = document.querySelector('.profile__profession');

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('#name').value;
  let professionInput = document.querySelector('#profession').value;

  name.textContent = nameInput;
  profession.textContent = professionInput;
  popup.classList.remove('popup_opened');

}

submitButton.addEventListener('click', formSubmitHandler);
