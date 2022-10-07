import { popupImage, imageInPopup, titlePopupImage } from "./constants.js";

export class Card {
  constructor(data, tmpSelector) {
    this._name = data.name;
    this._link = data.link;
    this._tmpSelector = tmpSelector;
    
  }

  // Метод получения шаблона
  _getTemplate() {
    const cardElement = document
      .querySelector(this._tmpSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }
  
  // Метод открытия попапа
    _openPopup() {
    popupImage.classList.add('popup_opened');
    imageInPopup.src = this._link;
    imageInPopup.alt = this._name;
    titlePopupImage.textContent = this._name;
  }
  
  // Метод установки лайка
  _cardLike() {
    this._like = this._element.querySelector('.card__like');
    this._like.classList.toggle('card__like_state_active');
    this._like.classList.toggle('card__like_state_hover');
  }

  // Метод удаления карточки
  _cardDelete() {
    this._element.remove();
  }

 // Метод устанвки слушателей
  _setEventListeners() {
        this.cardImage.addEventListener('click', () => {
        this._openPopup(popupImage);
      });

    this._element
      .querySelector('.card__trash')
      .addEventListener('click', (evt) => {
        this._cardDelete();

      });

    this._element
      .querySelector('.card__like')
      .addEventListener('click', () => {
        this._cardLike();
      })
  }

 // Метод создания карточки (публичный)
  createCard() {
    this._element = this._getTemplate();
    this.cardImage = this._element.querySelector('.card__image');
    this._setEventListeners();
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this._element.querySelector('.card__location')
      .textContent = this._name;
    return this._element;
  }

};
