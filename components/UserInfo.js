export default class UserInfo {
nameInput = document.querySelector("#name-input");
professionInput = document.querySelector("#profession-input");
nameValue = document.querySelector(".profile__name");
professionValue = document.querySelector(".profile__profession");

  constructor({name, profession}) {
    this._name = name;
    this._profession = profession;
  }
  getUserInfo(){
    this.nameInput = document.querySelector("#name-input");
    this.professionInput = document.querySelector("#profession-input");
    // this._form = document.querySelector(".popup__form");
    // this._inputList = this._form.querySelectorAll(".popup__form-text");
    this.nameInput.value = this._name.textContent;
    this.professionInput.value = this._profession.textContent;
  };
  setUserInfo(){
    this._name.textContent = this.nameInput.value;
    this._profession.textContent = this.professionInput.value;
  };

}
