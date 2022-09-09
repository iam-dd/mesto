const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};


// Валидируем инпуты

function validationInput(form, input, settings) {
  if (!input.validity.valid) {
    showError(form, input, settings);
  }
  else {
    hideError(form, input, settings);
  }
};

<<<<<<< HEAD
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
=======
//Показываем ошибку

function showError(form, input, settings) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  error.textContent = input.validationMessage;
  error.classList.add(settings.errorClass);
};

//Скрываем ошибку

function hideError(form, input, settings) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  error.textContent = '';
  error.classList.remove(settings.errorClass);
};

//Функция валидации

const enableValidation = (settings) => {
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, settings);
  });

};

//Устанавливаем слушатель на инпуты

const setEventListeners = (form, settings) => {
  const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  const button = form.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputs, button);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validationInput(form, input, settings);
      toggleButtonState(inputs, button);
    });
>>>>>>> ref/js_validation
  });
};

// Если поле не валидное

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

//меняем состояние кнопки submit

const toggleButtonState = (inputs, button) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
    button.value = 'Disabled';
  }
  else {
    button.classList.remove(settings.inactiveButtonClass);
    button.disabled = false;
    button.value = 'Enabled';
  }
};

<<<<<<< HEAD
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
=======

enableValidation(settings);
>>>>>>> ref/js_validation



