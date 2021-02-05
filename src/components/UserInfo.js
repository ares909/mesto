export default class UserInfo {
  constructor({ name, profession }) {
    this._name = name;
    this._profession = profession;
  }
  getUserInfo({ name, profession }) {
    // this._name.textContent = name;
    // this._profession.textContent = profession;
    return ({name, profession});
    // this.nameInput = document.querySelector("#name-input");
    // this.professionInput = document.querySelector("#profession-input");
    // this.nameInput.value = this._name.textContent;
    // this.professionInput.value = this._profession.textContent;
  }
  setUserInfo({name, profession}) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}
