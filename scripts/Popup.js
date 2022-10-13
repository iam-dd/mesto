export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);

  }

  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    this._handleEscClose();
  }

  openPopup() {
    this._popupSelector.classList.add('popup_opened');
    this._handleEscClose();
    this.setEventListeners();
  }

  _handleEscClose() {
    document.addEventListener('keydown', (evt) => {
     if (evt.key === 'Escape') {
    this._popupSelector.classList.remove('popup_opened')
   };
  });
  }

  setEventListeners() {
    this._popupSelector.addEventListener('mousedown', (evt) => {
if (evt.target.classList.contains('popup_opened')
    ||
    evt.target.classList.contains('popup__button-close')) {
      this.closePopup()
    }
    })
  }
}