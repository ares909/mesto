export default class UserInfo {
  constructor({ name, profession }) {
    this._name = name;
    this._profession = profession;
  }
  getUserInfo({ name, profession }) {
    return { name, profession };
  }
  setUserInfo({ name, profession }) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}
