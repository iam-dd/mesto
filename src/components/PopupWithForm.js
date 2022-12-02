import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {

    constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    this._values = {};
    this._inputsList.forEach((input) =>
      this._values[input.name] = input.value
    );
 
    return this._values;
  }
  setInputValues(el) {
    this._inputsList.forEach((input) =>
    input.value = el[input.name]
    );
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      evt.target.reset();
      this.closePopup();
    })
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }


}