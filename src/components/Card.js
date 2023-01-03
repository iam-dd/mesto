export class Card {
  constructor({ name, link, _id, likes}, templateSelector, handleCardClick, api) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._likes = likes.length;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this._api = api;
  
  }


  // _findUserId() {
  //   return this._likes.find((res) => res._id === this._userId)
  // }


  // Метод получения шаблона
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  //Метод установки лайка
  _handleCardLike() {
    this._like.classList.toggle('card__like_state_active');
    this._like.classList.toggle('card__like_state_hover');
    this._api.setCardLike(this._id).then((res) => {
      const arrayLikes = res.likes.length
      this.countLikes.textContent = arrayLikes;

    });

  }


  _setCardsLike() {
    this.countLikes.textContent = this._likes;
  }

  _getCardOwner() {
    this._api.setCardLike(this._id).then((res) => {
      const likeOwner = res.owner._id
      console.log(likeOwner)
    });
  }


  // Метод установки слушателей
  _setEventListeners() {
    this.cardImage.addEventListener('click', () => {
      this.handleCardClick(this._name, this._link);
    });


    this._element
      .querySelector('.card__like')
      .addEventListener('click', () => {
        this._handleCardLike();
      })

  }




  // Метод создания карточки (публичный)
  createCard() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.card__like');
    this.cardImage = this._element.querySelector('.card__image');
    this.countLikes = this._element.querySelector('.card__amount-oflike');
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this._setCardsLike();
    this._getCardOwner();
    this._element.querySelector('.card__location').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }


};
