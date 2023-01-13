import "../pages/index.css";
import { FormValidator } from "../components/FormValidator";
import {
  selectors,
  API_OPTIONS,
  settings,
  avatarButton,
  editButton,
  addButton,
  inputName,
  inputAbout,
  formsArray,
} from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation";
import { Api } from "../components/Api.js";

// Передаем URL и Token для API
const api = new Api(API_OPTIONS);

// Глобальная переменная для User ID
let userId = "";
let cardId = "";
let cardForTrash = "";

Promise.all([api.getInitialCards(), api.getProfileData()])
  .then(([cardData, userData]) => {
    userId = userData._id;
    cardList.renderItems(cardData);
    newProfile.setUserInfo(userData);
    newProfile.setNewAvatar(userData);
  })
  .catch((error) => {
    console.error(error);
  });

// Слой добавления карточек в разметку
const items = [];
const cardList = new Section(
  {
    items: items,
    renderer: (data) => {
      cardList.addItem(createNewCard(data));
    },
  },
  ".elements"
);

// Функция валидации
function enableValidator() {
  formsArray.forEach((form) => {
    const validatorFormsArray = new FormValidator(settings, form);
    validatorFormsArray.enableValidation();
    validatorFormsArray.toggleButtonState();
  });
}

// Попап редактирования профиля
const newProfile = new UserInfo(selectors);

const addUserData = () => {
  const { subtitleData, titleData } = newProfile.getUserInfo();
  inputName.value = titleData;
  inputAbout.value = subtitleData;
};

const popupAddProfile = new PopupWithForm({
  popupSelector: ".popup_section_profile",
  handleSubmitForm: (dataInputs) => {
    popupAddProfile.showPreloader()
    api.setProfileData(dataInputs)
      .then((res) => {
        newProfile.setUserInfo(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAddProfile.changeTextContent();
        popupAddProfile.closePopup();
      });
  },
});
popupAddProfile.setEventListeners();

//Попап обновления аватарки
const popupAvatarLoad = new PopupWithForm({
  popupSelector: ".popup_section_avatar-load",
  handleSubmitForm: (dataInputs) => {
    popupAvatarLoad.showPreloader();
    api.newAvatarLoad(dataInputs.link)
      .then((data) => {
        newProfile.setNewAvatar(data);
      })
      .catch((err) => console.log("AvatarLoad", err))
      .finally(() => {
        popupAvatarLoad.changeTextContent();
        popupAvatarLoad.closePopup();
      });
  },
});
popupAvatarLoad.setEventListeners();

//Попап подтверждения

const popupConfirm = new PopupWithConfirmation(".popup_confirmation", {
  handleSubmitForm: async () => {
    try {
      await api.deleteCard(cardId);
      popupConfirm.closePopup();
      cardForTrash.handleCardDelete();
    } catch (err) {
      console.log("Ошибка при подтверждении удаления карточки", err);
    }
  },
});
popupConfirm.setEventListeners();

// Попап добавления карточек
const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_section_elements",
  handleSubmitForm: (dataInputs) => {
    popupAddCard.showPreloader();
    api.createCardApi(dataInputs.link, dataInputs.name)
      .then((res) => {
        cardList.addItem(createNewCard(res));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAddCard.changeTextContent();
        popupAddCard.closePopup();
      });
  },
});
popupAddCard.setEventListeners();

// Попап с картинкой
const popupWithImage = new PopupWithImage(".popup_section_image");
popupWithImage.setEventListeners();

// Кнопка вызова попапа добавления карточки
addButton.addEventListener("click", () => {
  enableValidator();
  popupAddCard.openPopup();
});

// Кнопка открытия попапа загрузки аватара
avatarButton.addEventListener("click", () => {
  enableValidator();
  popupAvatarLoad.openPopup();
});

// Кнопка редактирования профиля
editButton.addEventListener("click", () => {
  enableValidator();
  popupAddProfile.openPopup();
  addUserData();
});

function createNewCard(data) {
  const card = new Card(data, userId, ".template", {
    handleCardClick: () => {
      popupWithImage.openPopup(data);
    },
    handleAddLike: () => {
      api
        .setCardLike(data._id)
        .then((obj) => {
          card.setLikeData(obj.likes);
        })
        .catch((err) => console.log(err));
    },

    handleRemoveLike: () => {
      api
        .delCardLike(data._id)
        .then((obj) => {
          card.setLikeData(obj.likes);
        })
        .catch((err) => console.log(err));
    },

    handleCardDel: () => {
      popupConfirm.openPopup();
      cardId = data._id;
      cardForTrash = card;
    },
  });
  const cardReady = card.createCard();

  return cardReady;
}
