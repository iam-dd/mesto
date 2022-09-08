const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active')
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active')

};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement, settings) => {
     toggleButtonState(formElement, settings);
  settings.forEach((el) => {
    el.addEventListener('input', () => {
      isValid(formElement, settings);
      toggleButtonState(settings, submitButtonSelector);
    
    });
  });
};

const enableValidation = (settings) => {
  settings.forEach((el) => {
    el.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
    console.log(formElement, settings);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button-submit_disable');
    buttonElement.disabled = true;
    buttonElement.value = 'Disabled';
  }
  else {
    buttonElement.classList.remove('popup__button-submit_disable');
    buttonElement.disabled = false;
    buttonElement.value = 'Enabled';
  }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});



