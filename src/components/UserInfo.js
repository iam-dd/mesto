// import { titleText, subtitleText } from '../utils/constants.js';
import { inputName, inputAboutme } from '../utils/constants.js';


export class UserInfo {
  constructor(selectors) {
    this._title = document.querySelector(selectors.title);
    this._subtitle = document.querySelector(selectors.subtitle);
  }

  setUserInfo() {
    this._title.textContent = inputName.value;
    this._subtitle.textContent = inputAboutme.value;

  }

  getUserInfo() {
    const userData = {
      titleData: this._title.textContent,
      subtitleData: this._subtitle.textContent
    }
    return userData;
  }

}