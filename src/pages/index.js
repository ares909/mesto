//импортируем классы и переменные
import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";
import {
  initialCards,
  editButton,
  addButton,
  name,
  profession,
  formName,
  formPlace,
  elementContainer,
  popupImage,
  formCard,
  validationSettings,
  nameInput,
  professionInput,
  submitButton,
  confirmationPopup,
  deleteButton,
  avatarContainer,
  avatarButton,
  formAvatar,
  avatarImage,
} from "../utils/constants.js";

const formNameValidator = new FormValidator(validationSettings, formName);
const formPlaceValidator = new FormValidator(validationSettings, formPlace);
formPlaceValidator.enableValidation();
formNameValidator.enableValidation();

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    authorization: "89fc14f5-c7ca-4e60-97f4-2de7395294ca",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([user, cards]) => {
    const cardList = new Section(
      {
        renderer: (item) => {
          const card = new Card(
            item,
            "#elementTemplate",
            () => popupWithImage.open(item.name, item.link),
            () => confirmation.open(item, card),
            api,
            user
          ).generateCard();
          cardList.addItem(card);
        },
      },
      elementContainer
    );

    let userData = new UserInfo({
      name: name,
      profession: profession,
    });

    cardList.renderItems(cards);
    userData.getServerInfo(user);

    const openFormName = () => {
      formWithName.open();
      const profileInfo = userData.getUserInfo();
      nameInput.value = profileInfo.name;
      professionInput.value = profileInfo.profession;
      formNameValidator.resetValidation(formName);
    };

    const popupWithImage = new PopupWithImage(popupImage);
    popupWithImage.setEventListeners();

    const formWithPlace = new PopupWithForm({
      popupSelector: formPlace,
      handleFormSubmit: (item) => {
        api.addNewCard(item).then((res) => {
          const card = new Card(
            res,
            "#elementTemplate",
            () => popupWithImage.open(res.name, res.link),
            () => confirmation.open(item, card),
            api,
            user
          ).generateCard();
          cardList.addItem(card);
          formWithPlace.close();
        });
      },
    });
    formWithPlace.setEventListeners();

    const formWithName = new PopupWithForm({
      popupSelector: formName,
      handleFormSubmit: (item) => {
        api
          .changeProfileInfo({
            name: item.name,
            about: item.profession,
          })
          .catch((err) => {
            console.log(err);
          });
        userData.setUserInfo(item);
        formWithName.close();
      },
    });
    formWithName.setEventListeners();

    const formWithAvatar = new PopupWithForm({
      popupSelector: formAvatar,
      handleFormSubmit: (item) => {
        api.changeAvatar(item).catch((err) => {
          console.log(err);
        });
        avatarImage.src = item.avatar;
        formWithAvatar.close();
      },
    });
    formWithAvatar.setEventListeners();

    const openFormAvatar = () => {
      formWithAvatar.open();
      formNameValidator.resetValidation(formAvatar);
    };

    const confirmation = new PopupWithConfirmation(
      {
        popupSelector: confirmationPopup,
        handleFormSubmit: () => {
          confirmation.close();
        },
      },
      api
    );

    confirmation.setEventListeners();

    const openFormPlace = () => {
      formWithPlace.open();
      formPlaceValidator.resetValidation(formPlace);
    };

    const showButton = () => {
      avatarButton.classList.add("profile__avatar-button_focused");
    };
    const hideButton = () => {
      avatarButton.classList.remove("profile__avatar-button_focused");
    };

    editButton.addEventListener("click", openFormName);
    addButton.addEventListener("click", openFormPlace);
    avatarContainer.addEventListener("mouseover", showButton);
    avatarContainer.addEventListener("mouseleave", hideButton);
    avatarButton.addEventListener("click", openFormAvatar);
  })

  .catch((err) => {
    console.log(err);
  });
