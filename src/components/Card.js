//создадим класс для карточки
export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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
    this._likeButton.addEventListener("click", () => {
      this._likeCard();
    });
    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
  // ставим лайк
  _likeCard() {
    this._likeButton.classList.toggle("element__like_active");
  }
  //удаляем карточку
  _deleteCard() {
    this._element.closest(".element").remove();
    this._element = "";
  }
  //создать карточку
  generateCard() {
    this._element = this._getTemplate();
    this.setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__text").textContent = this._name;
    return this._element;
  }
}