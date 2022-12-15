export class FormValidator {

    constructor(settings, element) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._element = element;
    this._button = this._element.querySelector(this._submitButtonSelector);
    this._inputs = Array.from(this._element.querySelectorAll(this._inputSelector));
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
  const error = this._element.querySelector(`.${input.id}-error`);
  input.classList.add(this._inputErrorClass);
  error.textContent = input.validationMessage;
  error.classList.add(this._errorClass);
};

// Метод скрытия ошибки

_hideError(input) {
  const error = this._element.querySelector(`.${input.id}-error`);
  input.classList.remove(this._inputErrorClass);
  error.textContent = '';
  error.classList.remove(this._errorClass);
};

// Метод изменения состояния кнопки submit

toggleButtonState() {
    if (this._hasInvalidInput(this._inputs)) {
      
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
    this._button.value = 'Disabled';
  }
  else {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = false;
    this._button.value = 'Enabled';
  }
};

// Метод установки слушателя на инпуты

_setEventListeners() {
   this._inputs.forEach((input) => {
    input.addEventListener('input', () => {
      this._validationInput(input);
      this.toggleButtonState();
      
    });

  });
};

// Метод вызова валидации (публичный)

enableValidation(){
      this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
};

};

