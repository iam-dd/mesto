
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
const selectors = {
  title: '.profile__title',
  subtitle: '.profile__subtitle'
}
const newProfile = new UserInfo(selectors);


const addUserData = () => {
  inputName.value = newProfile.getUserInfo().titleData;
  inputAboutme.value = newProfile.getUserInfo().subtitleData;
}
const popupAddProfile = new PopupWithForm('.popup_section_profile')


editButton.addEventListener('click', () => {
  popupAddProfile.openPopup();
  addUserData();
  
  validatorFormProfile.toggleButtonState();
});





const popupAddCard = new PopupWithForm('.popup_section_elements', (dataInputs) => {
  cardList.addItem(createNewCard(dataInputs))
})

// Кнопка вызова попапа добавления карточки

addButton.addEventListener('click', () => {
  validatorFormCard.toggleButtonState();
  popupAddCard.openPopup();
  popupAddCard.setEventListeners();

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

// Слой добавления карточек в разметку
const cardList = new Section({
  items: initialCards,
  renderer: (data) => cardList.addItem(createNewCard(data))
},
  '.elements');

cardList.renderItems();



