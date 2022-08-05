


//buttons
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');
let inputName = document.querySelector('input[id=name]');
let inputAboutme = document.querySelector('input[id=aboutme]');

function showPopup() {
  popup.classList.add('popup_opened');
  inputName.setAttribute('value', titleText.innerText);
  inputAboutme.setAttribute('value', subtitleText.innerText);
}

function hidePopup() {
  popup.classList.remove('popup_opened');
  inputName.removeAttribute('value');
  inputAboutme.removeAttribute('value');

}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);


//form

let formElement = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
  evt.preventDefault();
  titleText.innerText = (inputName).value;
  subtitleText.innerText = (inputAboutme).value;
}

formElement.addEventListener('submit', formSubmitHandler);
console.log(nameTitle, nameSubtitle);



