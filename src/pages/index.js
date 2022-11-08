
import '../pages/index.css';
import { Validator } from '../components/FormValidator';
import {
  settings, initialCards, editButton, addButton,
  formElementsAdd, formProfileAdd, listElement,
  inputName, inputAboutme, inputTitle, inputLink,
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo';
import { PopupWithImage } from '../components/PopupWithImage';

// Вызов валидатора

const validatorFormCard = new Validator(settings, formElementsAdd);
validatorFormCard.enableValidation();

const validatorFormProfile = new Validator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

// Кнопка вызова формы добавления профайла

editButton.addEventListener('click', () => {
  const selectors = { name: inputName, aboutme: inputAboutme }
  const newProfile = new UserInfo('.popup_section_profile', selectors);
  newProfile.openPopup();
  validatorFormProfile.toggleButtonState();
});

//

const popupAddCard = new PopupWithForm('.popup_section_elements', (dataInputs) => {
  cardList.addItem(createNewCard(dataInputs))
  
})
const dataInputs = [inputTitle.value, inputLink.value];


// Кнопка вызова попапа добавления карточки

addButton.addEventListener('click', () => {
  validatorFormCard.toggleButtonState();
  popupAddCard.openPopup();

});
popupAddCard.setEventListeners();


// Функция создания карточки
const createNewCard = function (data) {
  const card = new Card(data, '.template', () => {
    { popupWithImage.openPopup(data) }
  }).createCard();
  return card;
}

// Попап с картинкой
const popupWithImage = new PopupWithImage('.popup_section_image')
popupWithImage.setEventListeners();


const cardList = new Section({
  items: initialCards,
  renderer: (data) => cardList.addItem(createNewCard(data))
},
  '.elements');

cardList.renderItems();



