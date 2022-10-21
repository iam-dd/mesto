
import '../pages/index.css';
import { Validator } from './FormValidator.js';
import {
  settings, initialCards, editButton, addButton,
  formElementsAdd, formProfileAdd, listElement,
  inputName, inputAboutme
} from './constants.js';

import { Card } from './Card.js';
import { Section } from './Section.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithImage } from './PopupWithImage.js';

// Вызов валидатора

const validatorFormElement = new Validator(settings, formElementsAdd);
validatorFormElement.enableValidation();

const validatorFormProfile = new Validator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

// Кнопка вызова формы добавления профайла

editButton.addEventListener('click', () => {
  const selectors = { name: inputName, aboutme: inputAboutme }
  const newProfile = new UserInfo('.popup_section_profile', selectors);
  newProfile.openPopup();
  validatorFormProfile.toggleButtonState();
});

// Кнопка вызова формы добавления карточки
const popupAddCard = new PopupWithForm('.popup_section_elements', (data) => {
  const card = new Card(data, '.template', (name, link) => {
    const PopupImageOpen = new PopupWithImage('.popup_section_image');
    PopupImageOpen.openPopup(name, link);
    PopupImageOpen.setEventListeners();
  });
  const renderCard = card.createCard()
  listElement.prepend(renderCard);
});


addButton.addEventListener('click', () => {
  validatorFormElement.toggleButtonState();
  popupAddCard.openPopup();
  
});
popupAddCard.setEventListeners();

// Добавляем карточки из массива

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.template', (cardItem) => {
        const PopupImageOpen = new PopupWithImage('.popup_section_image', cardItem);
        PopupImageOpen.openPopup();
        PopupImageOpen.setEventListeners();
    });
    const cardElement = card.createCard();
    cardList.addItem(cardElement)
  }
},
  '.elements');
cardList.renderItems();


