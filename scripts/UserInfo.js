export default class UserInfo {
    constructor(item) {
        this._item = item;
    }

    getUserInfo(){
        return this._item;
    }

    setUserInfo(item){
        this._item = item;
    }

  }