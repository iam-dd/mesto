
import '../pages/index.css';
import { FormValidator } from '../components/FormValidator';
import {
  settings, avatarButton, editButton, addButton,
  formElementsAdd, formProfileAdd, formAvatarLoad, inputName, inputAboutme,
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import { Api } from '../components/Api.js';

// Вызов валидатора

const validatorFormCard = new FormValidator(settings, formElementsAdd);
validatorFormCard.enableValidation();

const validatorFormProfile = new FormValidator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

const validatonFormAvatarLoad = new FormValidator(settings, formAvatarLoad);
validatonFormAvatarLoad.enableValidation();

// Кнопка вызова формы добавления профайла
const selectors = {
  title: '.profile__title',
  subtitle: '.profile__subtitle',
  avatar: '.profile__avatar'
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

//Попап обновления аватарки

const popupAvatarLoad = new PopupWithForm ({
  popupSelector: '.popup_section_avatar-load',
  handleSubmitForm: (dataInputs) => {
    return api.newAvatarLoad(dataInputs.link)
    .then((data) => {
      newProfile.setUserInfo(data);
    })

  }
})
popupAvatarLoad.setEventListeners();

// Кнопка вызова попапа добавления карточки

addButton.addEventListener('click', () => {
  validatorFormCard.toggleButtonState();
  popupAddCard.openPopup();

});

// Кнопка открытия попапа загрузки аватара
avatarButton.addEventListener('click', () => {
  validatonFormAvatarLoad.toggleButtonState();
  popupAvatarLoad.openPopup();
})



// Функция создания карточки
function createNewCard(data) {
  const card = new Card(data, '.template', () => {
    { popupWithImage.openPopup(data) }
  }).createCard();
  return card;
  // const newCard = new Api(API_OPTIONS);
  // newCard.createCardApi(data.link, data.name);
}



// Попап с картинкой
const popupWithImage = new PopupWithImage('.popup_section_image')
popupWithImage.setEventListeners();

const API_OPTIONS = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-56',

  headers: {
    authorization: '5bc865bb-7482-46a1-8209-c5f11aa5ba1a',
    'Content-Type': 'application/json',
  }
};


// Слой добавления карточек в разметку


const api = new Api(API_OPTIONS);
api.getInitialCards().then((data) => {
  const cardList = new Section({
    items: data,
    renderer: (data) => {
      cardList.addItem(createNewCard(data));
    },
  }, '.elements');

  cardList.renderItems();

});









