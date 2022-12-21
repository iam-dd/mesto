export class UserInfo {
  constructor(selectors) {
    this._title = document.querySelector(selectors.title);
    this._subtitle = document.querySelector(selectors.subtitle);
    this._avatar = document.querySelector(selectors.avatar)
  }

  setUserInfo(dataInputs) {
    this._title.textContent = dataInputs.name;
    this._subtitle.textContent = dataInputs.aboutme;
    this._avatar.src = dataInputs.avatar;

  }

  getUserInfo() {
    const userData = {
      titleData: this._title.textContent,
      subtitleData: this._subtitle.textContent
    }
    return userData;
  }

}