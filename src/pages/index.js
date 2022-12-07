
import '../pages/index.css';
import { FormValidator } from '../components/FormValidator';
import {
  settings, initialCards, editButton, addButton,
  formElementsAdd, formProfileAdd, inputName, inputAboutme, 
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo';
import { PopupWithImage } from '../components/PopupWithImage';

// Вызов валидатора

const validatorFormCard = new FormValidator(settings, formElementsAdd);
validatorFormCard.enableValidation();

const validatorFormProfile = new FormValidator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

// Кнопка вызова формы добавления профайла
const selectors = {
  title: '.profile__title',
  subtitle: '.profile__subtitle'
}
const newProfile = new UserInfo(selectors);


const addUserData = () => {
  const { subtitleData, titleData } = newProfile.getUserInfo()
  inputName.value = titleData;
  inputAboutme.value = subtitleData;
}

const popupAddProfile = new PopupWithForm({
  popupSelector: '.popup_section_profile',
  handleSubmitForm: (dataInputs) => {
    newProfile.setUserInfo(dataInputs);
  }
})
popupAddProfile.setEventListeners();



editButton.addEventListener('click', () => {
  validatorFormProfile.toggleButtonState();
  popupAddProfile.openPopup();
  addUserData();
});


const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_section_elements',
  handleSubmitForm: (dataInputs) => {
    cardList.addItem(createNewCard({ name: dataInputs.name, link: dataInputs.link }));
  },
});
popupAddCard.setEventListeners();

// Кнопка вызова попапа добавления карточки

addButton.addEventListener('click', () => {
  validatorFormCard.toggleButtonState();
  popupAddCard.openPopup();

});



// Функция создания карточки
function createNewCard(data) {
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
  renderer: (data) => {
    cardList.addItem(createNewCard(data));
  },
}, '.elements');

cardList.renderItems();





