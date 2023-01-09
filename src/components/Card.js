export class Card {
  constructor(data, userId, templateSelector, handleCardClick, api, handleCheckOwnerCardLike) {
    this._data = data;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this._api = api;
    this._userId = userId;
    this._handleCheckOwnerCardLike = handleCheckOwnerCardLike;
    this._likes = data.likes

  }


  // Метод получения шаблона
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }


  _checkLikeOwner() {
    this._handleCheckOwnerCardLike()
    console.log(this._data)
  }

  _updateCardsLike() {
    this.countLikes.textContent = this._data.likes.length
  }

  _brushCardLike() {
    this._like.classList.add('card__like_state_active')
  }


  // Метод установки слушателей
  _setEventListeners() {
    this.cardImage.addEventListener('click', () => {
      this.handleCardClick(this._data.name, this.data._link);
    });


    this._element
      .querySelector('.card__like')
      .addEventListener('click', () => {
        // this._handleCardLike();
        this._setCardLike()
      })

  }


  // Метод создания карточки (публичный)
  createCard() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.card__like');
    this.cardImage = this._element.querySelector('.card__image');
    this.countLikes = this._element.querySelector('.card__amount-oflike');
    this.cardImage.src = this._data.link;
    this.cardImage.alt = this._data.name;
    this._updateCardsLike();
    this._checkLikeOwner();
    this._element.querySelector('.card__location').textContent = this._data.name;
    this._setEventListeners();
    return this._element;
  }


};
