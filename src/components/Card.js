//создадим класс для карточки
export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    openConfirmation,
    api,
    user
  ) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._openConfirmation = openConfirmation;
    this._api = api;
    this._data = data;
    this._user = user;
  }

  //добавить шаблон
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  //добавим в класс все слушатели для карточки
  setEventListeners() {
    this._likeButton = this._element.querySelector(".element__like");
    this._deleteButton = this._element.querySelector(".element__trash");
    this._cardImage = this._element.querySelector(".element__image");
    this._likeCounter = this._element.querySelector(".element__like-counter");

    this._likeButton.addEventListener("click", () => {
      this._likeCard();
    });
    this._deleteButton.addEventListener("click", () => {
      // this._deleteCard();
      this._openConfirmation();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
  // ставим лайк
  _likeCard() {
    if (this._likeButton.classList.contains("element__like_active")) {
      this._likeButton.classList.toggle("element__like_active");
      this._api
        .deleteCardLike(this._data)
        .then((res) => {
          this._likes.length = res.likes.length;
          this._likeCounter.textContent = this._likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this._likeButton.classList.toggle("element__like_active");
      this._api
        .setCardLike(this._data)
        .then((res) => {
          this._likes.length = res.likes.length;
          this._likeCounter.textContent = this._likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _hideButton() {
    if (this._user._id !== this._owner) {
      this._deleteButton.remove();
    }
  }

  _likeState() {
    return this._data.likes.some((like) => {
      return like._id === this._user._id;
    });
  }

  _showLike() {
    if (this._likeState()) {
      this._likeButton.classList.toggle("element__like_active");
    }
  }

  // создать карточку
  generateCard() {
    this._element = this._getTemplate();
    this.setEventListeners();
    this._hideButton();
    this._likeState();
    this._showLike();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;
    this._likeCounter.textContent = this._likes.length;
    return this._element;
  }
}
