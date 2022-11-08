export class Card {
  constructor({name, link}, tmpSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._tmpSelector = tmpSelector;
    this.handleCardClick = handleCardClick;
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

  // Метод устанвки слушателей
  _setEventListeners() {
    this.cardImage.addEventListener('click', () => {
      this.handleCardClick(this._name, this._link);
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
    this._element.querySelector('.card__location').textContent = this._name;
    return this._element;
  }

};
