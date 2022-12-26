
import '../pages/index.css';
import { FormValidator } from '../components/FormValidator';
import {
  selectors, API_OPTIONS, settings, avatarButton, editButton, addButton,
  formElementsAdd, formProfileAdd, formAvatarLoad, inputName, inputAbout,
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import { Api } from '../components/Api.js';


// Передаем URL и Token для API
const api = new Api(API_OPTIONS);



// Вызов валидатора для форм
const validatorFormCard = new FormValidator(settings, formElementsAdd);
validatorFormCard.enableValidation();

const validatorFormProfile = new FormValidator(settings, formProfileAdd);
validatorFormProfile.enableValidation();

const validatonFormAvatarLoad = new FormValidator(settings, formAvatarLoad);
validatonFormAvatarLoad.enableValidation();

// Попап редактирования профиля
const newProfile = new UserInfo(selectors);

const addUserData = () => {
  const { subtitleData, titleData, } = newProfile.getUserInfo()
  inputName.value = titleData;
  inputAbout.value = subtitleData;
}

const popupAddProfile = new PopupWithForm({
  popupSelector: '.popup_section_profile',
  handleSubmitForm: (dataInputs) => {
      newProfile.setUserInfo(dataInputs)
      api.setProfileData(dataInputs);
  }
})
popupAddProfile.setEventListeners();

//Попап обновления аватарки
const popupAvatarLoad = new PopupWithForm ({
  popupSelector: '.popup_section_avatar-load',
  handleSubmitForm: (dataInputs) => {
    return api.newAvatarLoad(dataInputs.link)
    .then((data) => {
      newProfile.setUserInfo(data);
    })
    .catch((err) => console.log(err));

  }
})
popupAvatarLoad.setEventListeners();



// Попап добавления карточек
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_section_elements',
  handleSubmitForm: (dataInputs) => {
    api.createCardApi(dataInputs.link, dataInputs.name).then((res) => {
      console.log(res)
    cardList.addItem(createNewCard(res));
  })
  },
});
popupAddCard.setEventListeners();

// Попап с картинкой
const popupWithImage = new PopupWithImage('.popup_section_image')
popupWithImage.setEventListeners();



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

// Кнопка редактирования профиля
editButton.addEventListener('click', () => {
  validatorFormProfile.toggleButtonState();
  popupAddProfile.openPopup();
  addUserData();
});

// Функция создания карточки
function createNewCard(data) {
  const card = new Card(data, '.template', () => {
    { popupWithImage.openPopup(data) }
  }).createCard();
  return card;
}

// Слой добавления карточек в разметку
const items = [];
  const cardList = new Section({
    items: items,
    renderer: (data) => {
      cardList.addItem(createNewCard(data));
    },
  }, '.elements');


  api.getInitialCards().then((res) => {
  cardList.renderItems(res);
  });











