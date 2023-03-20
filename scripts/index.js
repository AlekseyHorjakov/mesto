import Card from './Card.js';
import FormValidator from './FormValidator.js';
// Объявляем переменные 

const popupEditElement = document.querySelector(".popup_type_edit");
const popupEditButtonElement = document.querySelector(".profile__edit");
const popupEditCloseButtonElement = document.querySelector(".popup__button-close");
const profileElement = document.querySelector(".profile");
const popupEditForm = popupEditElement.querySelector(".popup__form");
const profileNameElement = profileElement.querySelector(".profile__name");
const profileProfessionElement = profileElement.querySelector(".profile__profession");
const popupNameElement = document.querySelector(".popup__input_type_name");
const popupProfessionElement = document.querySelector(".popup__input_type_profession");
const popupElements = Array.from(document.querySelectorAll(".popup"));
export const popupAddElement = document.querySelector(".popup_type_add");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const popupAddCloseButtonElement = document.querySelector(".popup__close");
export const popupZoomPicture = document.querySelector(".popup__image");
export const popupZoomDescription = document.querySelector(".popup__image-name");
export const popupImage = document.querySelector(".popup_type_image");
const popupImageCloseButtonElement = popupImage.querySelector(".popup__button-close");
export const popupCardNameInput = document.querySelector(".popup__input_type_place");
export const popupCardLinkInput = document.querySelector(".popup__input_type_link");
export const popupAddForm = document.querySelector(".popup__form_add");
export const buttonAddPlace = popupAddForm.querySelector(".popup__button-save");


// Открываем окна

export const openPopup = function (popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEsc);

};


popupEditButtonElement.addEventListener("click", function () {
    popupNameElement.value = profileNameElement.textContent;
    popupProfessionElement.value = profileProfessionElement.textContent;
    openPopup(popupEditElement);
});


popupAddButtonElement.addEventListener("click", function () {
    openPopup(popupAddElement);

});

// Закрываем окна

popupElements.forEach((popup) =>
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            closePopup(popup);
        }
    })
);

function closeByEsc(event) {
    if (event.key === "Escape") closePopup(document.querySelector(".popup_opened"));
}

export const closePopup = function (popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEsc);
};


popupEditCloseButtonElement.addEventListener("click", function () {
    closePopup(popupEditElement);
});

popupAddCloseButtonElement.addEventListener("click", function () {
    closePopup(popupAddElement);
});

popupImageCloseButtonElement.addEventListener("click", function () {
    closePopup(popupImage);
});

// Меняем данные пользователя

const editProfile = function (evt) {
    evt.preventDefault();
    profileNameElement.textContent = popupNameElement.value;
    profileProfessionElement.textContent = popupProfessionElement.value;
    closePopup(popupEditElement);
};
popupEditForm.addEventListener("submit", editProfile);


//Создание карточек

const initialCards = [
    { name: "Архыз", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" },
    { name: "Челябинская область", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" },
    { name: "Иваново", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" },
    { name: "Камчатка", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" },
    { name: "Холмогорский район", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" },
    { name: "Байкал", link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" },
];

export let card = new Card(initialCards, '#elements');


const validationConfig = {
    formSelector: ".popup__form",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button-save_disabled",
    inputErrorClass: "popup__input-error",
    errorClass: "popup__error_visible",
};

let inputLink = new FormValidator(validationConfig, document.getElementById('inputLink'));
inputLink.enableValidation();
let inputPlace = new FormValidator(validationConfig, document.getElementById('inputPlace'));
inputPlace.enableValidation();
let inputProfession = new FormValidator(validationConfig, document.getElementById('inputProfession'));
inputProfession.enableValidation();
let inputName = new FormValidator(validationConfig, document.getElementById('inputName'));
inputName.enableValidation();

