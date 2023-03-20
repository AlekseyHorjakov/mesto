import {
    popupZoomPicture,
    popupZoomDescription,
    popupCardNameInput,
    popupCardLinkInput,
    buttonAddPlace,
    popupAddForm,
    card,
    openPopup,
    closePopup,
    popupAddElement,
    popupImage
} from './index.js';

export default class Card {
    _initialCards;
    _cardTemplateElement;
    _cardsContainer;

    constructor(initialCards, template) {
        this._initialCards = initialCards;
        let cardTemplate = document.querySelector(template);
        this._cardTemplateElement = cardTemplate.content.querySelector(".element");
        this._cardsContainer = document.querySelector(".elements");
        this._initialCards.forEach((item) => {
            this._renderCard(item.name, item.link);
        });
        popupAddForm.addEventListener("submit", (evt) => card.addCard(evt));
    }

    addCard(evt){
        evt.preventDefault();
        const name = popupCardNameInput.value;
        const link = popupCardLinkInput.value;
        this._renderPrependCard(name, link);
        popupAddForm.reset();
        closePopup(popupAddElement);
        buttonAddPlace.classList.add('popup__button-save_disabled');
        buttonAddPlace.disabled = true;
    };

    _createCard(name, link) {
        const card = this._cardTemplateElement.cloneNode(true);
        const cardName = card.querySelector(".element__name");
        const cardImage = card.querySelector(".element__image");
        cardImage.src = link;
        cardName.textContent = name;
        cardImage.alt = name;
        cardImage.addEventListener("click", () => this._zoomPopup(link, name));

        //  Кнопка активации лайка

        const buttonLike = card.querySelector(".element__button-like");
        buttonLike.addEventListener("click", function () {
            buttonLike.classList.toggle("element__button-like_active");
        });

        //   Кнопка удаления карточки

        const buttonDell = card.querySelector(".element__button-delete");
        buttonDell.addEventListener("click", () => {
            card.remove();
        });
        
        return card;
    }

    _zoomPopup(link, name) {
        popupZoomPicture.src = link;
        popupZoomPicture.alt = name;
        popupZoomDescription.textContent = name;
        openPopup(popupImage);
    }

    _renderCard(name, link) {
        this._cardsContainer.append(this._createCard(name, link));
    };

    _renderPrependCard(name, link) {
        this._cardsContainer.prepend(this._createCard(name, link));
    };

}