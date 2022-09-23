export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      openPopup(popupImage);
      imageInPopup.src = this._link;
      imageInPopup.alt = this._name;
      titlePopupImage.textContent = this._name;
    })
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.template')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const img = this._element.querySelector('.card__image')
    img.src = this._link;
    img.alt = this._name;
    this._element.querySelector('.card__sign')
      .textContent = this._name;
     

    return this._element;

  }

};