import { PopupWithForm } from "./PopupWithForm";

export class PopupWithConfirmation extends PopupWithForm {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector)
    this.popupSelector = popupSelector;
    this._handleSubmitForm = handleSubmitForm;
  }


}