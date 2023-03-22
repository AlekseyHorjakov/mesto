export default class FormValidator {
  _config;
  _form;

  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    const button = this._form.querySelector(this._config.submitButtonSelector);
    this._toggleButton(inputs, button);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInput( input);
        this._toggleButton(inputs, button);
      });
    });
  }

  _toggleButton(inputs, buttonElement) {
    if (this._hasInvalidInputs(inputs)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }
  
  _hasInvalidInputs(inputs) {
    return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  _checkInput( input) {
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
}