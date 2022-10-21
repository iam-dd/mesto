import { titleText, subtitleText } from './constants.js';
import { Popup } from './Popup.js';

export class UserInfo extends Popup {
  constructor(popupSelector, selectors) {
    super(popupSelector);
    this._name = selectors.name;
    this._aboutme = selectors.aboutme;
  }

  setUserInfo() {
    const data = {
      name: this._name.value,
      aboutme: this._aboutme.value
    }
    return data;
  }

  getUserInfo() {
    this._name.value = titleText.textContent;
    this._aboutme.value = subtitleText.textContent;

  }
  openPopup() {
    super.openPopup();
    this.getUserInfo();
    this.setEventListeners();
    super.setEventListeners();
  }
  setEventListeners() {
    const button = document.querySelector('.popup__button-submit');
    button.addEventListener('click', (evt) => {
      titleText.textContent = this.setUserInfo().name;
      subtitleText.textContent = this.setUserInfo().aboutme;
      this.closePopup();
    });

  }

}