export default class UserInfo {
    constructor(item) {
        this._item = item;
    }

    getUserInfo() {
        console.log(this._item);
        return {
            elementPopupInputName: this._item.elementPopupInputName.textContent,
            elementPopupInputProfession: this._item.elementPopupInputProfession.textContent
        };
    }

    setUserInfo(item) {
        this._item.elementPopupInputName.textContent = item.elementPopupInputName;
        this._item.elementPopupInputProfession.textContent = item.elementPopupInputProfession;
    }

}