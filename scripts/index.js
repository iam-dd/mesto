import {Card} from './Card.js';


//Button
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__button');

//Popup
const popupProfile = document.querySelector('.popup_section_profile');
const popupElements = document.querySelector('.popup_section_elements');
const popupImage = document.querySelector('.popup_section_image');
const imageInPopup = popupImage.querySelector('.popup__image');
const titlePopupImage = popupImage.querySelector('.popup__title-image')
const popups = Array.from(document.querySelectorAll('.popup'));


//Title
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');

//Form
const formProfileAdd = document.querySelector('.popup__form_section_profile');
const formElementsAdd = document.querySelector('.popup__form_section_elements');

//Input
const inputName = formProfileAdd.querySelector('.popup__input_field_name');
const inputAboutme = formProfileAdd.querySelector('.popup__input_field_aboutme');
const inputTitle = formElementsAdd.querySelector('.popup__input_field_title');
const inputLink = formElementsAdd.querySelector('.popup__input_field_link');

const listElement = document.querySelector('.elements');
const template = document.querySelector('.template');



//Cards Array
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// Создаем карточки из массива

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card._createCard();

  listElement.append(cardElement);
});



//Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    hidePopup(popupOpened);
  };
};


//Popup hide
function hidePopup(section) {
  section.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};



//Popup open
function openPopup(section) {
  section.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};


//Overlay && buttonClose
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      hidePopup(popup)
    }
    if (evt.target.classList.contains('popup__button-close')) {
      hidePopup(popup)
    };
  });
});


//Edit button
editButton.addEventListener('click', () => {
  openPopup(popupProfile);
  inputName.value = titleText.textContent;
  inputAboutme.value = subtitleText.textContent;
});

//Add button
addButton.addEventListener('click', () => {
  openPopup(popupElements);
  const buttonSubmit = popupElements.querySelector('.popup__button-submit');
  buttonSubmit.setAttribute('disabled', 'disabled');
  buttonSubmit.classList.add('popup__button-submit_disable');
});

formElementsAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const itemTitle = inputTitle.value;
  const itemLink = inputLink.value;
  const button = formElementsAdd.querySelector('.popup__button-submit')
  const newCard = new Card (itemTitle, itemLink);
  newCard._createCard();

  listElement.append(newCard);

  // addCard(itemTitle, itemLink);
  hidePopup(popupElements);
  evt.target.reset();

});

//Form add New Profile
formProfileAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  titleText.textContent = inputName.value;
  subtitleText.textContent = inputAboutme.value;
  hidePopup(popupProfile);
});

