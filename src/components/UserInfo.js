export default class UserInfo {
  constructor({ name, profession }) {
    this._name = name;
    this._profession = profession;
  }
  getUserInfo() {
    this.nameInput = document.querySelector("#name-input");
    this.professionInput = document.querySelector("#profession-input");
    this.nameInput.value = this._name.textContent;
    this.professionInput.value = this._profession.textContent;
  }
  setUserInfo() {
    this._name.textContent = this.nameInput.value;
    this._profession.textContent = this.professionInput.value;
  }
}
