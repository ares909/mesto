let editButton = document.querySelector('.profile__editbutton');
let closeButton = document.querySelector('.popup__cross');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('#name');
let professionInput = document.querySelector('#profession');
let name = document.querySelector('.profile__name');
let profession = document.querySelector('.profile__profession');

function popupOpened() {
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
}

editButton.addEventListener('click', popupOpened);

function popupClosed() {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', popupClosed);

let submitButton = document.querySelector('.popup__form-button');


function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput = document.querySelector('#name').value;
  professionInput = document.querySelector('#profession').value;
  name.textContent = nameInput;
  profession.textContent = professionInput;
  popup.classList.remove('popup_opened');

}

submitButton.addEventListener('click', formSubmitHandler);
popup.addEventListener("keyup", function(evt) {

  if (evt.keyCode === 13) {

    evt.preventDefault();

    document.querySelector('.popup__form-button').click();
  }
});

