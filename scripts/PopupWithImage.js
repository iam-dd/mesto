import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {

  openPopup(name, link) {
    const image = document.querySelector('.popup__image');
    const titleImage = document.querySelector('.popup__title-image');
    image.src = link;
    image.alt = name;
    titleImage.textContent = name;
    console.log(link, name)

    super.openPopup();
  }

}