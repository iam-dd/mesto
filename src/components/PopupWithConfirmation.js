import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
  }

  openPopup() {
    super.openPopup();
  }
  closePopup() {
    super.closePopup();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__button-submit_section_confirmation")
      .addEventListener("click", () => {
        this._handleSubmitForm();
      });
  }
}
