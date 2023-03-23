export default class FormValidator {
  _config;
  _form;

  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._button = this._form.querySelector(this._config.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._toggleButton();
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInput(input);
        this._toggleButton();
      });
    });
  }

  _toggleButton() {
    if (this._hasInvalidInputs(this._inputs)) {
      this._button.disabled = true;
      this._button.classList.add(this._config.inactiveButtonClass);
    } else {
      this._button.disabled = false;
      this._button.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _hasInvalidInputs(inputs) {
    return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInput(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

  _showError(input) {
    const error = this._form.querySelector(`.${input.id}-inputError`);
    error.classList.add(this._config.errorClass);
    input.classList.add(this._config.inputErrorClass);
    error.textContent = input.validationMessage;
  }

  _hideError(input) {
    const error = this._form.querySelector(`.${input.id}-inputError`);
    error.classList.remove(this._config.errorClass);
    input.classList.remove(this._config.inputErrorClass);
    error.textContent = "";
  }

  resetValid() {
    this._toggleButton();
    this._inputs.forEach((input) => {
      this._hideError(input);
    });
  }
}