export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.closePopup();
    }
  }

  _handleMousedownClose = (event) => {
    if (event.target.classList.contains('popup_opened')
      ||
      event.target.classList.contains('popup__button-close')) {
      this.closePopup()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleMousedownClose)
  }
}