import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
 
  constructor(popupSelector, { data }) {
    this._popupSelector = popupSelector;
    this._name = data.name;
    this._link = data.link;
    const image = document.querySelector('.popup__image');
    const titleImage = document.querySelector('.popup__title-image');
    
  }
  openPopup() {
    image.src = this._link;
    image.alt = this._name;
    titleImage.textContent = this._name;

    super.openPopup();
  }

}