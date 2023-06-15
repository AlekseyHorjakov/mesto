import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  open(link, name) {
    document.querySelector(".popup__image").src = link;
    document.querySelector(".popup__image").alt = name;
    document.querySelector(".popup__image-name").textContent = name;
    this._popup.classList.add("popup_opened");
  }
}
