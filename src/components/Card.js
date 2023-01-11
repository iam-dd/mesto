export class Card {
  constructor(data, userId, templateSelector, { handleCardClick, handleAddLike, handleRemoveLike, handleCardDel }) {
    this._data = data;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleCardDel = handleCardDel;
    this._likes = data.likes
    this._owner = data.owner
    
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

  //Открываем большую картинку
  _openBigImage() {
    this._handleCardClick(this._data);
  }


  // Удаляем карточку
  handleCardDelete() {
    this._element.remove();
    this._element = null
  }

  // Ставим/снимаем лайк
  _handleClickLike() {
    if (this._like.classList.contains('card__like_state_active')) {
      this._handleRemoveLike(this)
    }
    else {
      this._handleAddLike(this)
    }
  }

  // Проставляем лайки в массиве

  _setCardsLike(likes) {
    if (likes.some(like => like._id === this._userId)) {
      this._like.classList.add('card__like_state_active')
    }
    else {
      this._like.classList.remove('card__like_state_active')
    }
  }

  setLikeData(likes) {
    this._likes = likes;
    this.countLikes.textContent = this._likes.length;
    this._setCardsLike(this._likes)
  }




  // Метод установки слушателей
  _setEventListeners() {
    this.cardImage.addEventListener('click', () => {
      this._openBigImage();
    })


    // Слушатель лайк
    this._element
      .querySelector('.card__like')
      .addEventListener('click', () => {
        this._handleClickLike();
      })
    //Слушатель корзина
    this._trash.addEventListener('click', () => {
      this._handleCardDel()
    })

  }


  // Метод создания карточки (публичный)
  createCard() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.card__like');
    this._trash = this._element.querySelector('.card__trash');
    this.cardImage = this._element.querySelector('.card__image');
    this.countLikes = this._element.querySelector('.card__amount-oflike');
    this.cardImage.src = this._data.link;
    this.cardImage.alt = this._data.name;
    this._setCardsLike(this._likes);
    this._element.querySelector('.card__location').textContent = this._data.name;
    this._setEventListeners();

    if (this._userId !== this._owner._id) {
      this._trash.remove();
    }

    return this._element;
  }


};
