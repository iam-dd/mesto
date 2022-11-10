import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {

  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);

    this._handleSubmitForm = handleSubmitForm;
    this._formSelector = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputValues = {
      name: this._formSelector.getElementsByTagName('input')[0].value,
      link: this._formSelector.getElementsByTagName('input')[1].value
    }
    return inputValues;

  }

  setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      evt.target.reset();
      this.openPopup();
      this.closePopup();
         
    })
    super.setEventListeners();
  }

  closePopup() {
    super.closePopup();
    this._formSelector.reset();
  }


}