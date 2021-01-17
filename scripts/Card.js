

//создадим класс для карточки
export default class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    //scr alt для картиник???
  }
  //добавить шаблон
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
  //добавим в класс все слушатели для карточки
  _setEventListeners(){
    this._element.querySelector('.element__like').addEventListener('click',() => {
      this._likeCard();
    })
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._deleteCard();
    })
    this._element.querySelector('.element__image').addEventListener('click', () => {
     this._openCardPopup();
    })
  }
  //ставим лайк
  _likeCard(){
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }
  //удаляем карточку
  _deleteCard() {
    this._element.closest('.element').remove();
    this._element = '';
  }
  //добавим попап с подписью
 _openCardPopup(){
    document.querySelector('#popup_image-container').classList.add('popup_opened');
    document.querySelector('#popup-image').src = this._link;
    document.querySelector('#popup-image').alt = this._name;
    document.querySelector('#description').textContent = this._name;
    ///добавь тут константы!!!!
  }
  //создать карточку
  _generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    //this._element.querySelector('.element__image').src = this_.link; сюда пропиши альты для картинок
    return this._element;
  }
}
