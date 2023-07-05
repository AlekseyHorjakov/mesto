import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popup, handleFormSubmit) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this.formElement = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(
            this.formElement.querySelectorAll('.popup__input')
        );
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
            this._handleFormSubmit(this._getInputValues());
            this.closePopup();
            evt.preventDefault();
        });
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    setInputValues(inputValues) {
        this._inputList.forEach((input) => {
            input.value = inputValues[input.name]
        })
    }

    closePopup() {
        this.formElement.reset();
        super.close();
    }
}