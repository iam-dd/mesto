export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    this.removeEventListeners();
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      console.log(this.closePopup, 'hello')
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
    document.addEventListener('keydown', this._handleEscClose)
  }

  removeEventListeners() {
    this._popup.removeEventListener('mousedown', this._handleMousedownClose);
    document.removeEventListener('keydown', this._handleEscClose)
  }
}