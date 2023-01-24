const popupElement = document.querySelector(".popup");
const popupOpenButtonElement = document.querySelector(".profile__edit");
const popupCloseButtonElement = popupElement.querySelector(".popup__button-close");
const popupSaveButtonElement = popupElement.querySelector(".popup__button-save");
const profileElement = document.querySelector(".profile");

let profileNameElement = profileElement.querySelector(".profile__name");
let profileProfessionElement = profileElement.querySelector(".profile__profession");
let popupNameElement = document.querySelector(".popup__name");
let popupProfessionElement = document.querySelector(".popup__profession");


const openPopup = function () {
popupElement.classList.add("popup_opened");
popupNameElement.value = profileNameElement.textContent;
popupProfessionElement.value = profileProfessionElement.textContent;
}

popupOpenButtonElement.addEventListener("click" , openPopup);

const closePopup = function () {
    popupElement.classList.remove("popup_opened");
}

popupCloseButtonElement.addEventListener("click" , closePopup);
popupSaveButtonElement.addEventListener("click" , closePopup);



const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
};
popupElement.addEventListener("click", closePopupByClickOnOverlay);

const OutText = function (evt) {
    evt.preventDefault();
    profileNameElement.textContent = popupNameElement.value;
    profileProfessionElement.textContent = popupProfessionElement.value;
};

popupElement.addEventListener('submit', OutText);
