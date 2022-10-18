
import { Validator } from './FormValidator.js';
import {
  settings, initialCards, popups, editButton, addButton,
  formElementsAdd, formProfileAdd, popupElements, listElement,
  inputTitle, inputLink, popupImage, titlePopupImage, imageInPopup,
  popupProfile, inputName, titleText, inputAboutme
  , subtitleText
} from './constants.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';



// Вызов валидатора

const validatorFormElement = new Validator(settings, formElementsAdd);
validatorFormElement.enableValidation();

const validatorFormProfile = new Validator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

// Кнопка вызова формы добавления профайла

editButton.addEventListener('click', () => {
  const selectors = {
    name: inputName,
    aboutme: inputAboutme
  }
  const newProfile = new UserInfo('.popup_section_profile', selectors);
  newProfile.openPopup();
  validatorFormProfile.toggleButtonState();
});


// Добавление карточки из формы
const addNewCard = new PopupWithForm('.popup_section_elements', (data) => {
  const card = new Card(data, '.template');
  listElement.prepend(card.createCard());
});

// Кнопка добавить
addButton.addEventListener('click', () => {
  validatorFormElement.toggleButtonState();
  addNewCard.openPopup();

});

// // Форма добавления профайла
// formProfileAdd.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   titleText.textContent = inputName.value;
//   subtitleText.textContent = inputAboutme.value;
//   hidePopup(popupProfile);
// });

// Добавляем карточки из массива
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.template');
    const cardElement = card.createCard();
    cardList.addItem(cardElement)
  }
},
  '.elements');
cardList.renderItems();


