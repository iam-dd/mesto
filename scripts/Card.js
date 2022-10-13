import { popupImage, imageInPopup, titlePopupImage, formElementsAdd } from "./constants.js";
import { PopupWithImage } from "./PopupWithImage.js";

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

  // Метод установки лайка
  _cardLike() {
    this._like = this._element.querySelector('.card__like');
    this._like.classList.toggle('card__like_state_active');
    this._like.classList.toggle('card__like_state_hover');
  }

  // Метод удаления карточки
  _cardDelete() {
    this._element.remove();
    this._element = null;

  }

  // Метод открытия попапа
  openPopupImage() {
    const PopupImageOpen = new PopupWithImage('.popup_section_image');
    PopupImageOpen.openPopup(this._name, this._link);
    };


  // Метод устанвки слушателей
  _setEventListeners() {
    this.cardImage.addEventListener('click', () => {
      this.openPopupImage();
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
