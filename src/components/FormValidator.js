import {settings} from '../utils/constants';

export class FormValidator {

    constructor(settings, element) {
    this.formSelector = settings.formSelector;
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this.inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
    this.element = element;
    this.button = this.element.querySelector(this.submitButtonSelector);
    this.inputs = Array.from(this.element.querySelectorAll(this.inputSelector));
  }

  // Метод валидации инпутов

_validationInput(input) {
  if (!input.validity.valid) {
    this._showError(input);
  }
  else {
    this._hideError(input);
  }
};

// Если поле не валидное

_hasInvalidInput(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

// Метод показа ошибки

_showError(input) {
  const error = this.element.querySelector(`.${input.id}-error`);
  input.classList.add(this.inputErrorClass);
  error.textContent = input.validationMessage;
  error.classList.add(this.errorClass);
};

// Метод скрытия ошибки

_hideError(input) {
  const error = this.element.querySelector(`.${input.id}-error`);
  input.classList.remove(this.inputErrorClass);
  error.textContent = '';
  error.classList.remove(this.errorClass);
};

// Метод изменения состояния кнопки submit

toggleButtonState() {
    if (this._hasInvalidInput(this.inputs)) {
      
    this.button.classList.add(this.inactiveButtonClass);
    this.button.disabled = true;
    this.button.value = 'Disabled';
  }
  else {
    this.button.classList.remove(this.inactiveButtonClass);
    this.button.disabled = false;
    this.button.value = 'Enabled';
  }
};

// Метод установки слушателя на инпуты

_setEventListeners() {
   this.inputs.forEach((input) => {
    input.addEventListener('input', () => {
      this._validationInput(input);
      this.toggleButtonState();
      
    });

  });
};

// Метод вызова валидации (публичный)

enableValidation(){
      this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
};

};

