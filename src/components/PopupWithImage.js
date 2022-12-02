import { Popup } from '../components/Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._image = document.querySelector('.popup__image');
    this._titleImage = document.querySelector('.popup__title-image');
  }
  openPopup(data) {

    this._image.src = data.link;
    this._image.alt = data.name;
    this._titleImage.textContent = data.name;
    this.setEventListeners()
    super.openPopup();
  }

  setEventListeners() {
  super.setEventListeners();
  }
}