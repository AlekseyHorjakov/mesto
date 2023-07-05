export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this._handleEscClose();
        this.setEventListeners();
    }

    open(){
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this.doEsc);
    }

    close(){
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this.doEsc);
    }

    doEsc(e){
        if (e.target === this._popup) {
            this.close();
        }
    }

    _handleEscClose(){
        document.addEventListener("keydown", (event)=>{
            if (event.key === "Escape") this.close();
        });
    }

    setEventListeners(){
        this._popup.querySelector('.popup__button-close').addEventListener('click', () => this.close());
    }

  }