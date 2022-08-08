
//Button
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');

//Popup
let popup = document.querySelector('.popup');

//Title
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');

//Input
let inputName = document.querySelector('.popup__input_name');
let inputAboutme = document.querySelector('.popup__input_aboutme');

//Form
let formElement = document.querySelector('.popup__form');

function showPopup() {
  popup.classList.add('popup_opened');
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
}

function hidePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  titleText.textContent = inputName.value;
  subtitleText.textContent = inputAboutme.value;
  hidePopup();
}

//EventListener
editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);
formElement.addEventListener('submit', formSubmitHandler);








