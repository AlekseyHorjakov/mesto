import {
    popupZoomPicture,
    popupZoomDescription,
    openPopup,
    popupImage
} from './index.js';

export default class Card {
    constructor(name, link, template){
        const cardTemplate = document.querySelector(template);
        const cardTemplateElement = cardTemplate.content.querySelector(".element")
        this._name = name;
        this._link = link;
        this._card = cardTemplateElement.cloneNode(true);
        this._cardName = this._card.querySelector(".element__name");
        this._cardImage = this._card.querySelector(".element__image");
        this._cardImage.src = link;
        this._cardName.textContent = name;
        this._cardImage.alt = name;
    }

    createCard(){
        this._likeCard();
        this._delCard();
        this._zoomCard();
        return this._card;
    }

    _likeCard(){
        const buttonLike = this._card.querySelector(".element__button-like");
        buttonLike.addEventListener("click", function () {
            buttonLike.classList.toggle("element__button-like_active");
        });
    }

    _delCard(){
        const buttonDell = this._card.querySelector(".element__button-delete");
        buttonDell.addEventListener("click", () => {
            this._card.remove();
        });
    }

    _zoomCard(){
        this._cardImage.addEventListener("click", () => this._zoomPopup());
    }

    _zoomPopup() {
        popupZoomPicture.src = this._link;
        popupZoomPicture.alt = this._name;
        popupZoomDescription.textContent = this._name;
        openPopup(popupImage);
    }

}