import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this.popupImageSrc = document.querySelector(".popup__image");
    this.popupImageAlt = document.querySelector(".popup__image");
    this.popupImageName = document.querySelector(".popup__image-name");
  }

  open(link, name) {
    super.open();
    this.popupImageSrc.src = link;
    this.popupImageAlt.alt = name;
    this.popupImageName.textContent = name;
  }
}
