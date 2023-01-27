const popupElement = document.querySelector(".popup");
const popupOpenButtonElement = document.querySelector(".profile__edit");
const popupCloseButtonElement = document.querySelector(".popup__button-close");
const profileElement = document.querySelector(".profile");
const popupForm = document.querySelector(".popup__form");

let profileNameElement = profileElement.querySelector(".profile__name");
let profileProfessionElement = profileElement.querySelector(".profile__profession");
let popupNameElement = document.querySelector(".popup__input_type_name");
let popupProfessionElement = document.querySelector(".popup__input_type_profession");


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

const textWrapping = function (evt) {
    evt.preventDefault ();
    profileNameElement.textContent = popupNameElement.value;
    profileProfessionElement.textContent = popupProfessionElement.value;
    closePopup();
} 
    popupForm.addEventListener("submit" , textWrapping);